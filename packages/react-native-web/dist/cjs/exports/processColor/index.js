"use strict";

exports.__esModule = true;
exports.default = void 0;

var _normalizeCssColor = _interopRequireDefault(require("normalize-css-color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var processColor = function processColor(color) {
  if (color === undefined || color === null) {
    return color;
  } // convert number and hex


  var int32Color = (0, _normalizeCssColor.default)(color);

  if (int32Color === undefined || int32Color === null) {
    return undefined;
  }

  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};

var _default = processColor;
exports.default = _default;
module.exports = exports.default;