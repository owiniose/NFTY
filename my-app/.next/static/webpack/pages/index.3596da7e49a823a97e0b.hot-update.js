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

  var providerOptions = {
    walletconnect: {
      "package": WalletConnectProvider,
      options: {
        infuraId: "c9fbeef25811469f95f260d96ccefbfe"
      }
    }
  };

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
      lineNumber: 61,
      columnNumber: 9
    }, _this);
  } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: " Mint "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9SZW5kZXJCdXR0b24uanMiXSwibmFtZXMiOlsiUmVuZGVyQnV0dG9uIiwidXNlU3RhdGUiLCJjb25uZWN0ZWRXYWxsZXQiLCJzZXRjb25uZWN0ZWRXYWxsZXQiLCJ3ZWIzTW9kYWxSZWYiLCJ1c2VSZWYiLCJwcm92aWRlck9wdGlvbnMiLCJ3YWxsZXRjb25uZWN0IiwiV2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwib3B0aW9ucyIsImluZnVyYUlkIiwiZ2V0U2lnbmVyT3JQcm92aWRlciIsIm5lZWRTaWduZXIiLCJjdXJyZW50IiwiY29ubmVjdCIsInByb3ZpZGVyIiwid2ViM1Byb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0TmV0d29yayIsImNoYWluSWQiLCJhbGVydCIsIkVycm9yIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29ubmVjdFdhbGxldCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJXZWIzTW9kYWwiLCJuZXR3b3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFFcUJDLHNEQUFRLENBQUUsS0FBRixDQUY3QjtBQUFBLE1BRW5CQyxlQUZtQjtBQUFBLE1BRURDLGtCQUZDOztBQUkzQixNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCLENBSjJCLENBSUk7O0FBRS9CLE1BQU1DLGVBQWUsR0FBRztBQUN0QkMsaUJBQWEsRUFBRTtBQUNiLGlCQUFTQyxxQkFESTtBQUViQyxhQUFPLEVBQUU7QUFDUEMsZ0JBQVEsRUFBRTtBQURIO0FBRkk7QUFETyxHQUF4Qjs7QUFXQSxNQUFNQyxtQkFBbUI7QUFBQSwwVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU9DLHdCQUFQLDJEQUFvQixLQUFwQjtBQUFBO0FBQUEscUJBQ0hSLFlBQVksQ0FBQ1MsT0FBYixDQUFxQkMsT0FBckIsRUFERzs7QUFBQTtBQUNwQkMsc0JBRG9CO0FBRXBCQywwQkFGb0IsR0FFTCxJQUFJQyxnREFBUyxDQUFDQyxZQUFkLENBQTJCSCxRQUEzQixDQUZLO0FBQUE7QUFBQSxxQkFHQUMsWUFBWSxDQUFDRyxVQUFiLEVBSEE7O0FBQUE7QUFBQTtBQUdsQkMscUJBSGtCLHlCQUdsQkEsT0FIa0I7O0FBQUEsb0JBSXRCQSxPQUFPLEtBQUssQ0FKVTtBQUFBO0FBQUE7QUFBQTs7QUFLeEJDLG1CQUFLLENBQUMsc0JBQUQsQ0FBTDtBQUx3QixvQkFNbEIsSUFBSUMsS0FBSixDQUFVLDJCQUFWLENBTmtCOztBQUFBO0FBQUEsbUJBUXRCVixVQVJzQjtBQUFBO0FBQUE7QUFBQTs7QUFTbEJXLG9CQVRrQixHQVNUUCxZQUFZLENBQUNRLFNBQWIsRUFUUztBQUFBLCtDQVVqQkQsTUFWaUI7O0FBQUE7QUFBQSwrQ0FZbkJSLFFBWm1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CSixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBZUEsTUFBTWMsYUFBYTtBQUFBLDJUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVpkLG1CQUFtQixFQUZQOztBQUFBO0FBR2xCUixnQ0FBa0IsQ0FBQyxJQUFELENBQWxCO0FBSGtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS2xCdUIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7O0FBTGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJGLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBU0VHLHlEQUFTLENBQUMsWUFBUTtBQUVkeEIsZ0JBQVksQ0FBQ1MsT0FBYixHQUF1QixJQUFJZ0IsZ0RBQUosQ0FBYztBQUNuQ0MsYUFBTyxFQUFFLFNBRDBCO0FBRW5DeEIscUJBQWUsRUFBRTtBQUZrQixLQUFkLENBQXZCO0FBTUgsR0FSUSxFQVFOLEVBUk0sQ0FBVDs7QUFXRSxNQUFJLENBQUNKLGVBQUwsRUFBcUI7QUFDbkIsd0JBQ0UscUVBQUMsdUVBQUQ7QUFBUSxhQUFPLEVBQUd1QixhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBR0QsR0FKRCxNQU1GLG9CQUNFLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQTdERDs7R0FBTXpCLFk7O0tBQUFBLFk7QUErRFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1OTZkYTdlNDlhODIzYTk3ZTBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJztcclxuaW1wb3J0IHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcHJvdmlkZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuXHJcbmNvbnN0IFJlbmRlckJ1dHRvbiA9ICgpID0+IHtcclxuXHJcbmNvbnN0IFsgY29ubmVjdGVkV2FsbGV0ICwgc2V0Y29ubmVjdGVkV2FsbGV0XSA9IHVzZVN0YXRlIChmYWxzZSk7XHJcblxyXG5jb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYoKTsgLy8gYWx3YXlzIHJldHVybnMgb2JqZWN0IGFzIGN1cnJlbnRcclxuXHJcbmNvbnN0IHByb3ZpZGVyT3B0aW9ucyA9IHtcclxuICB3YWxsZXRjb25uZWN0OiB7XHJcbiAgICBwYWNrYWdlOiBXYWxsZXRDb25uZWN0UHJvdmlkZXIsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGluZnVyYUlkOiBcImM5ZmJlZWYyNTgxMTQ2OWY5NWYyNjBkOTZjY2VmYmZlXCJcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IGdldFNpZ25lck9yUHJvdmlkZXIgPSBhc3luYyAobmVlZFNpZ25lciA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYuY3VycmVudC5jb25uZWN0KCk7XHJcbiAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xyXG4gIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcclxuICBpZiAoY2hhaW5JZCAhPT0gNCkge1xyXG4gICAgYWxlcnQoXCJVU0UgUklOS0VFQlkgTkVUV09SS1wiKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNoYW5nZSBuZXR3b3JrIHRvIFJpbmtlYnlcIik7XHJcbiAgfVxyXG4gIGlmIChuZWVkU2lnbmVyKSB7XHJcbiAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICByZXR1cm4gc2lnbmVyO1xyXG4gIH1cclxuICByZXR1cm4gcHJvdmlkZXI7XHJcbn07XHJcblxyXG5jb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBnZXRTaWduZXJPclByb3ZpZGVyKCk7XHJcbiAgICBzZXRjb25uZWN0ZWRXYWxsZXQodHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiIGVycm9yXCIsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSAgPT4gIHtcclxuXHJcbiAgICAgIHdlYjNNb2RhbFJlZi5jdXJyZW50ID0gbmV3IFdlYjNNb2RhbCh7XHJcbiAgICAgICAgbmV0d29yazogJ3JpbmtlYnknLFxyXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXHJcbiAgICAgICAgXHJcbiAgfSk7XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gICAgaWYgKCFjb25uZWN0ZWRXYWxsZXQpe1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrID17Y29ubmVjdFdhbGxldH0+IENvbm5lY3QgV2FsbGV0PC9CdXR0b24+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2VcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiA+IE1pbnQgPC9CdXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9