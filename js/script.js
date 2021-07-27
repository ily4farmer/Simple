!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./app/js/script.js")}({"./app/js/components/form.js":
/*!***********************************!*\
  !*** ./app/js/components/form.js ***!
  \***********************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = form;\n\nfunction form() {\n  var reg = /.+@.+\\..+/i;\n  var email = document.querySelector('.form__email'),\n      btn = document.querySelector('.form__btn'),\n      error = document.querySelector('.form__error');\n  btn.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    if (!reg.test(email.value)) {\n      email.classList.add('red');\n      email.value = \"\";\n      error.textContent = \"Enter email\";\n      return false;\n    } else {\n      error.textContent = \"\";\n      email.value = \"\";\n      email.classList.remove('red');\n      return true;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./app/js/components/form.js?")},"./app/js/components/slider.js":
/*!*************************************!*\
  !*** ./app/js/components/slider.js ***!
  \*************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar slider = function slider() {\n  var slides = document.querySelectorAll('.resours__slider'),\n      btnLeft = document.querySelector('#left'),\n      btnRight = document.querySelector('#right'),\n      btnFooter = document.querySelectorAll('.resours__footer-btn');\n  var index = 0;\n\n  function activeSlide(n) {\n    var _iterator = _createForOfIteratorHelper(slides),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var item = _step.value;\n        item.classList.remove('active');\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    slides[n].classList.add('active');\n  }\n\n  console.log(btnFooter);\n\n  function nextSlide() {\n    if (index == slides.length - 1) {\n      index = 0;\n    } else {\n      index++;\n    }\n\n    activeSlide(index);\n  }\n\n  function backSlide() {\n    if (index == 0) {\n      index = slides.length - 1;\n    } else {\n      index--;\n    }\n\n    activeSlide(index);\n  }\n\n  btnRight.addEventListener('click', nextSlide);\n  btnLeft.addEventListener('click', backSlide);\n  btnFooter[0].addEventListener('click', nextSlide);\n  btnFooter[1].addEventListener('click', backSlide);\n};\n\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./app/js/components/slider.js?")},"./app/js/script.js":
/*!**************************!*\
  !*** ./app/js/script.js ***!
  \**************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");\n\nvar _slider = _interopRequireDefault(__webpack_require__(/*! ./components/slider */ "./app/js/components/slider.js"));\n\nvar _form = _interopRequireDefault(__webpack_require__(/*! ./components/form */ "./app/js/components/form.js"));\n\ndocument.addEventListener("DOMContentLoaded", function () {\n  (0, _slider["default"])();\n  (0, _form["default"])();\n});\n\n//# sourceURL=webpack:///./app/js/script.js?')},"./node_modules/@babel/runtime/helpers/interopRequireDefault/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault/index.js ***!
  \****************************************************************************/
/*! no static exports found */function(module,exports){eval('function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    "default": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\nmodule.exports["default"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/interopRequireDefault/index.js?')}});