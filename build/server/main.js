require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("aphrodite");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(7);

var _compression2 = _interopRequireDefault(_compression);

var _path = __webpack_require__(8);

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _reactHelmet = __webpack_require__(1);

var _aphrodite = __webpack_require__(2);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientAssets = __webpack_require__(16); // eslint-disable-line import/no-dynamic-require
var port = parseInt("3000", 10);
var app = (0, _express2.default)();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use((0, _compression2.default)());

// Setup the public directory so that we can server static assets.
app.use(_express2.default.static(_path2.default.join(process.cwd(), "build/public")));

// Setup server side routing.
app.get('*', function (request, response) {
  var _StyleSheetServer$ren = _aphrodite.StyleSheetServer.renderStatic(function () {
    return (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
  }),
      root = _StyleSheetServer$ren.html,
      css = _StyleSheetServer$ren.css;

  response.status(200).send((0, _template2.default)({
    root: root,
    css: css,
    helmet: _reactHelmet.Helmet.renderStatic(),
    manifestJSBundle: clientAssets['manifest.js'],
    mainJSBundle: clientAssets['main.js'],
    vendorJSBundle: clientAssets['vendor.js'],
    mainCSSBundle: clientAssets['main.css']
  }));
});

app.listen(port, function () {
  console.log('\u2705  server started on port: ' + port); // eslint-disable-line no-console
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable prefer-template, max-len */

var getDeferScript = function getDeferScript(src) {
  return src ? '<script defer src="' + src + '"></script>' : '';
};

exports.default = function (vo) {
  return '\n\n<!DOCTYPE html>\n<html lang="en">\n\n  <head>\n    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />\n    <meta charSet=\'utf-8\' />\n    <meta httpEquiv="Content-Language" content="en" />\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n\n    <link id="favicon" rel="shortcut icon" href="/kyt-favicon.png" sizes="16x16 32x32" type="image/png" />\n    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">\n    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">\n    ' + (vo.mainCSSBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.mainCSSBundle + '">' : '') + '\n\n    ' + vo.helmet.title.toString() + '\n    ' + vo.helmet.meta.toString() + '\n    ' + vo.helmet.link.toString() + '\n    <style data-aphrodite>' + vo.css.content + '</style>\n    <script>\n      window.renderedClassNames = ' + JSON.stringify(vo.css.renderedClassNames) + '\n    </script>\n  </head>\n\n  <body ' + vo.helmet.bodyAttributes.toString() + '>\n    <div id="root"><div>' + vo.root + '</div></div>\n    ' + getDeferScript(vo.manifestJSBundle) + '\n    ' + getDeferScript(vo.vendorJSBundle) + '\n    ' + getDeferScript(vo.mainJSBundle) + '\n  </body>\n\n</html>\n\n';
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _materialUi = __webpack_require__(12);

var _Input = __webpack_require__(13);

__webpack_require__(14);

var _queryString = __webpack_require__(15);

var _queryString2 = _interopRequireDefault(_queryString);

var _aphrodite = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.networks = function (device) {
      return {
        ABC: {
          name: 'ABC',
          domain: 'watchabc.com',
          redirect: 'http://www.watchabc.com/activate?device=' + device
        },
        AETV: {
          name: 'A&amp;E',
          domain: 'aetv.com',
          redirect: 'http://www.aetv.com/activate?device=' + device
        },
        AMC: {
          name: 'AMC',
          domain: 'amc.com',
          redirect: 'http://www.amc.com/activate?device=' + device
        },
        CookingChannelIT: {
          name: 'Cooking Channel',
          domain: 'watch.cookingchanneltv.com',
          redirect: 'http://watch.cookingchanneltv.com/activate/thanks.html'
        },
        DIYNetwork: {
          name: 'DIY',
          domain: 'watch.diynetwork.com',
          redirect: 'http://watch.diynetwork.com/activate/thanks.html'
        },
        FoodNetwork: {
          name: 'Food Network',
          domain: 'watch.foodnetwork.com',
          redirect: 'http://watch.foodnetwork.com/activate/thanks.html'
        },
        FYI: {
          name: 'FYI',
          domain: 'fyi.tv',
          redirect: 'http://www.fyi.tv/activate?device=' + device
        },
        HGTV: {
          name: 'HGTV',
          domain: 'watch.hgtv.com',
          redirect: 'http://watch.hgtv.com/activate/thanks.html'
        },
        HISTORY: {
          name: 'History Channel',
          domain: 'history.com',
          redirect: 'http://www.history.com/activate?device=' + device
        },
        LIFETIME: {
          name: 'Lifetime',
          domain: 'mylifetime.com',
          redirect: 'http://www.mylifetime.com/activate?device=' + device
        },
        TravelChannel: {
          name: 'Travel Channel',
          domain: 'watch.travelchannel.com',
          redirect: 'http://watch.travelchannel.com/activate/thanks.html#' + device + '&Travel'
        }
      };
    };

    _this.generateLink = function () {
      var _this$state = _this.state,
          device = _this$state.device,
          network = _this$state.network,
          code = _this$state.code;


      var params = {
        reg_code: code,
        noflash: 'true',
        mso_id: 'Comcast_SSO',
        requestor_id: network,
        domain_name: _this.networks(device)[network].domain,
        redirect_url: _this.networks(device)[network].redirect
      };

      return 'https://api.auth.adobe.com/api/v1/authenticate?' + _queryString2.default.stringify(params);
    };

    _this.handleSelect = function (name) {
      return function (event) {
        var value = name === 'code' ? event.target.value.toUpperCase() : event.target.value;

        _this.setState(_defineProperty({}, name, value));
      };
    };

    _this.state = {
      device: 'appletv',
      network: '',
      code: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          device = _state.device,
          network = _state.network,
          code = _state.code;


      var link = network !== '' && code !== '' ? this.generateLink() : '';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'XF-Activation'
          )
        ),
        _react2.default.createElement(
          _materialUi.AppBar,
          { position: 'static' },
          _react2.default.createElement(
            _materialUi.Toolbar,
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              { type: 'title', color: 'inherit' },
              'XF-Activation'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.activator) },
          _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.inputs) },
            _react2.default.createElement(
              _materialUi.FormControl,
              null,
              _react2.default.createElement(
                _Input.InputLabel,
                { htmlFor: 'device' },
                'Device'
              ),
              _react2.default.createElement(
                _materialUi.Select,
                {
                  native: true,
                  value: device,
                  onChange: this.handleSelect('device'),
                  input: _react2.default.createElement(_materialUi.Input, { id: 'device' })
                },
                _react2.default.createElement(
                  'option',
                  { value: 'appletv' },
                  'Apple TV'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'roku' },
                  'Roku'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'xbox360' },
                  'Xbox 360'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'xboxone' },
                  'Xbox One'
                )
              )
            ),
            _react2.default.createElement(
              _materialUi.FormControl,
              null,
              _react2.default.createElement(
                _Input.InputLabel,
                { htmlFor: 'network' },
                'Network'
              ),
              _react2.default.createElement(
                _materialUi.Select,
                {
                  native: true,
                  value: network,
                  onChange: this.handleSelect('network'),
                  input: _react2.default.createElement(_materialUi.Input, { id: 'network' })
                },
                _react2.default.createElement('option', { value: '', disabled: true }),
                _react2.default.createElement(
                  'option',
                  { value: 'ABC' },
                  'ABC'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'AETV' },
                  'A&E'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'AMC' },
                  'AMC'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'CookingChannelIT' },
                  'Cooking Channel'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'DIYNetwork' },
                  'DIY'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'FoodNetwork' },
                  'Food Network'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'FYI' },
                  'FYI'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'HGTV' },
                  'HGTV'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'HISTORY' },
                  'History'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'LIFETIME' },
                  'Lifetime'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'TravelChannel' },
                  'Travel Channel'
                )
              )
            ),
            _react2.default.createElement(_materialUi.TextField, { label: 'Activation Code', value: code, onChange: this.handleSelect('code') })
          ),
          _react2.default.createElement(
            'div',
            null,
            link !== '' ? _react2.default.createElement(
              'a',
              { href: link },
              'Click here to activate.'
            ) : _react2.default.createElement(
              'span',
              null,
              'You must select a network and enter the activation code on your screen.'
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;


var styles = _aphrodite.StyleSheet.create({
  activator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
    marginBottom: 50
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("typeface-roboto");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"main.js":"/main-5f4a34e3021da14363e3.js","main.js.map":"/main-5f4a34e3021da14363e3.js.map","manifest.js":"/manifest-4eea71398fe2b3abab45.js","manifest.js.map":"/manifest-4eea71398fe2b3abab45.js.map","roboto-latin-100italic.woff":"/87528ba9a6e829db88fd8d2b94b362b9.woff","roboto-latin-300italic.woff":"/4bcc85a50fd0d42d5e416c56b39b8d71.woff","roboto-latin-400italic.woff":"/bad78f935b0182bd83ac29a45edcdb25.woff","roboto-latin-500italic.woff":"/01ef9f5b9fc166ecdf86e02e34b8fd64.woff","roboto-latin-700italic.woff":"/42b4247cf22991d1c26d8f66eb8f38f8.woff","roboto-latin-900italic.woff":"/968fd8b51b2075525dc4780b2c7affb0.woff","vendor.css":"/vendor-a22ac4621ceddd20f7e9.css","vendor.css.map":"/vendor-a22ac4621ceddd20f7e9.css.map","vendor.js":"/vendor-a22ac4621ceddd20f7e9.js","vendor.js.map":"/vendor-a22ac4621ceddd20f7e9.js.map"}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map