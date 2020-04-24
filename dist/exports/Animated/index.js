function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
import AnimatedImplementation from '../../vendor/react-native/Animated/AnimatedImplementation';
import FlatList from '../FlatList';
import Image from '../Image';
import SectionList from '../SectionList';
import ScrollView from '../ScrollView';
import Text from '../Text';
import View from '../View';

var Animated = _objectSpread({}, AnimatedImplementation, {
  FlatList: AnimatedImplementation.createAnimatedComponent(FlatList, {
    scrollEventThrottle: 0.0001
  }),
  Image: AnimatedImplementation.createAnimatedComponent(Image),
  ScrollView: AnimatedImplementation.createAnimatedComponent(ScrollView, {
    scrollEventThrottle: 0.0001
  }),
  SectionList: AnimatedImplementation.createAnimatedComponent(SectionList, {
    scrollEventThrottle: 0.0001
  }),
  View: AnimatedImplementation.createAnimatedComponent(View),
  Text: AnimatedImplementation.createAnimatedComponent(Text)
});

export default Animated;