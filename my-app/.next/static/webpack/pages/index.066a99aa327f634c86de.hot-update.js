webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Hero/RenderButton.js":
/*!*********************************************!*\
  !*** ./src/components/Hero/RenderButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ "./node_modules/web3modal/dist/index.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");




var _jsxFileName = "C:\\Users\\Owini\\OneDrive\\Desktop\\Works\\NFTY\\my-app\\src\\components\\Hero\\RenderButton.js",
    _this = undefined,
    _s = $RefreshSig$();







var RenderButton = function RenderButton() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      connectedWallet = _useState[0],
      setconnectedWallet = _useState[1];

  var web3ModalRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(); // always returns object as current

  var getSignerOrProvider = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var needSigner,
          provider,
          web3Provider,
          _yield$web3Provider$g,
          chainId,
          signer,
          _args = arguments;

      return C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              needSigner = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
              _context.next = 3;
              return web3ModalRef.current.connect();

            case 3:
              provider = _context.sent;
              web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_6__["providers"].Web3Provider(provider);
              _context.next = 7;
              return web3Provider.getNetwork();

            case 7:
              _yield$web3Provider$g = _context.sent;
              chainId = _yield$web3Provider$g.chainId;

              if (!(chainId !== 4)) {
                _context.next = 12;
                break;
              }

              alert("USE RINKEEBY NETWORK");
              throw new Error("Change network to Rinkeby");

            case 12:
              if (!needSigner) {
                _context.next = 15;
                break;
              }

              signer = web3Provider.getSigner();
              return _context.abrupt("return", signer);

            case 15:
              return _context.abrupt("return", provider);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getSignerOrProvider() {
      return _ref.apply(this, arguments);
    };
  }();

  var connectWallet = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return C_Users_Owini_OneDrive_Desktop_Works_NFTY_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return getSignerOrProvider();

            case 3:
              setconnectedWallet(true);
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.log(" error", _context2.t0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    return function connectWallet() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    web3ModalRef.current = new web3modal__WEBPACK_IMPORTED_MODULE_5___default.a({
      network: 'rinkeby',
      providerOptions: {}
    });
  }, []);

  if (!connectedWallet) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: connectWallet,
      children: " Connect Wallet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, _this);
  } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: " Mint "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);
};

_s(RenderButton, "o2VVkBuD3cIBDkXIl10Kf1NNxtM=");

_c = RenderButton;
/* harmony default export */ __webpack_exports__["default"] = (RenderButton);

var _c;

$RefreshReg$(_c, "RenderButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9SZW5kZXJCdXR0b24uanMiXSwibmFtZXMiOlsiUmVuZGVyQnV0dG9uIiwidXNlU3RhdGUiLCJjb25uZWN0ZWRXYWxsZXQiLCJzZXRjb25uZWN0ZWRXYWxsZXQiLCJ3ZWIzTW9kYWxSZWYiLCJ1c2VSZWYiLCJnZXRTaWduZXJPclByb3ZpZGVyIiwibmVlZFNpZ25lciIsImN1cnJlbnQiLCJjb25uZWN0IiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwiY2hhaW5JZCIsImFsZXJ0IiwiRXJyb3IiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb25uZWN0V2FsbGV0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIldlYjNNb2RhbCIsIm5ldHdvcmsiLCJwcm92aWRlck9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGtCQUVxQkMsc0RBQVEsQ0FBRSxLQUFGLENBRjdCO0FBQUEsTUFFbkJDLGVBRm1CO0FBQUEsTUFFREMsa0JBRkM7O0FBSTNCLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBM0IsQ0FKMkIsQ0FJSTs7QUFNL0IsTUFBTUMsbUJBQW1CO0FBQUEsMFRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPQyx3QkFBUCwyREFBb0IsS0FBcEI7QUFBQTtBQUFBLHFCQUNISCxZQUFZLENBQUNJLE9BQWIsQ0FBcUJDLE9BQXJCLEVBREc7O0FBQUE7QUFDcEJDLHNCQURvQjtBQUVwQkMsMEJBRm9CLEdBRUwsSUFBSUMsZ0RBQVMsQ0FBQ0MsWUFBZCxDQUEyQkgsUUFBM0IsQ0FGSztBQUFBO0FBQUEscUJBR0FDLFlBQVksQ0FBQ0csVUFBYixFQUhBOztBQUFBO0FBQUE7QUFHbEJDLHFCQUhrQix5QkFHbEJBLE9BSGtCOztBQUFBLG9CQUl0QkEsT0FBTyxLQUFLLENBSlU7QUFBQTtBQUFBO0FBQUE7O0FBS3hCQyxtQkFBSyxDQUFDLHNCQUFELENBQUw7QUFMd0Isb0JBTWxCLElBQUlDLEtBQUosQ0FBVSwyQkFBVixDQU5rQjs7QUFBQTtBQUFBLG1CQVF0QlYsVUFSc0I7QUFBQTtBQUFBO0FBQUE7O0FBU2xCVyxvQkFUa0IsR0FTVFAsWUFBWSxDQUFDUSxTQUFiLEVBVFM7QUFBQSwrQ0FVakJELE1BVmlCOztBQUFBO0FBQUEsK0NBWW5CUixRQVptQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQkosbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQWVBLE1BQU1jLGFBQWE7QUFBQSwyVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVaZCxtQkFBbUIsRUFGUDs7QUFBQTtBQUdsQkgsZ0NBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUhrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtsQmtCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUxrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiRixhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQVNFRyx5REFBUyxDQUFDLFlBQVE7QUFFZG5CLGdCQUFZLENBQUNJLE9BQWIsR0FBdUIsSUFBSWdCLGdEQUFKLENBQWM7QUFDbkNDLGFBQU8sRUFBRSxTQUQwQjtBQUVuQ0MscUJBQWUsRUFBRTtBQUZrQixLQUFkLENBQXZCO0FBTUgsR0FSUSxFQVFOLEVBUk0sQ0FBVDs7QUFXRSxNQUFJLENBQUN4QixlQUFMLEVBQXFCO0FBQ25CLHdCQUNFLHFFQUFDLHVFQUFEO0FBQVEsYUFBTyxFQUFHa0IsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUdELEdBSkQsTUFNRixvQkFDRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBR0QsQ0F0REQ7O0dBQU1wQixZOztLQUFBQSxZO0FBd0RTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNjZhOTlhYTMyN2Y2MzRjODZkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNtb2RhbCc7XHJcbmltcG9ydCB7dXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHByb3ZpZGVycyB9IGZyb20gJ2V0aGVycyc7XHJcblxyXG5jb25zdCBSZW5kZXJCdXR0b24gPSAoKSA9PiB7XHJcblxyXG5jb25zdCBbIGNvbm5lY3RlZFdhbGxldCAsIHNldGNvbm5lY3RlZFdhbGxldF0gPSB1c2VTdGF0ZSAoZmFsc2UpO1xyXG5cclxuY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7IC8vIGFsd2F5cyByZXR1cm5zIG9iamVjdCBhcyBjdXJyZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgZ2V0U2lnbmVyT3JQcm92aWRlciA9IGFzeW5jIChuZWVkU2lnbmVyID0gZmFsc2UpID0+IHtcclxuICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbFJlZi5jdXJyZW50LmNvbm5lY3QoKTtcclxuICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcik7XHJcbiAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xyXG4gIGlmIChjaGFpbklkICE9PSA0KSB7XHJcbiAgICBhbGVydChcIlVTRSBSSU5LRUVCWSBORVRXT1JLXCIpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hhbmdlIG5ldHdvcmsgdG8gUmlua2VieVwiKTtcclxuICB9XHJcbiAgaWYgKG5lZWRTaWduZXIpIHtcclxuICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgIHJldHVybiBzaWduZXI7XHJcbiAgfVxyXG4gIHJldHVybiBwcm92aWRlcjtcclxufTtcclxuXHJcbmNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGdldFNpZ25lck9yUHJvdmlkZXIoKTtcclxuICAgIHNldGNvbm5lY3RlZFdhbGxldCh0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCIgZXJyb3JcIiwgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpICA9PiAge1xyXG5cclxuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcclxuICAgICAgICBuZXR3b3JrOiAncmlua2VieScsXHJcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcclxuICAgICAgICBcclxuICB9KTtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBpZiAoIWNvbm5lY3RlZFdhbGxldCl7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2sgPXtjb25uZWN0V2FsbGV0fT4gQ29ubmVjdCBXYWxsZXQ8L0J1dHRvbj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uID4gTWludCA8L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlckJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=