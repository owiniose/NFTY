webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/*! exports provided: Container, Div1, Div2, Div3, NavLink, ContactDropDown, NavProductsIcon, SocialIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div1", function() { return Div1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div2", function() { return Div2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div3", function() { return Div3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDropDown", function() { return ContactDropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavProductsIcon", function() { return NavProductsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIcons", function() { return SocialIcons; });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Div1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-1"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Div2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;padding-top:30px;@media ", "{grid-area:2 / 2 / 3 / 5;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Div3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], function (props) {
  return props.theme.breakpoints.sm;
}); // Navigation Links

var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h6.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-4"
})(["font-size:2rem;line-height:32px;color:#000000;transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
}); /// DropDown Contact

var ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-5"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.md;
});
var NavProductsIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_icons_io__WEBPACK_IMPORTED_MODULE_0__["IoIosArrowDropdown"]).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-6"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? '1' : '.75';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 'scaleY(-1)' : 'scaleY(1)';
}, function (props) {
  return props.theme.breakpoints.sm;
}); // Social Icons 

var SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-7"
})(["transition:0.3s ease;color:black;border-radius:50px;padding:8px;&:hover{background-color:white;transform:scale(1.2);cursor:pointer;}"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIkRpdjEiLCJEaXYyIiwiRGl2MyIsIk5hdkxpbmsiLCJoNiIsIkNvbnRhY3REcm9wRG93biIsImJ1dHRvbiIsIm1kIiwiTmF2UHJvZHVjdHNJY29uIiwiSW9Jb3NBcnJvd0Ryb3Bkb3duIiwiaXNPcGVuIiwiU29jaWFsSWNvbnMiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK1FBUVgsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUlcsQ0FBZjtBQWlCQSxJQUFNQyxJQUFJLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBS04sVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBTE0sQ0FBVjtBQVNBLElBQU1FLElBQUksR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpSUFLTixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FMTSxDQUFWO0FBVUEsSUFBTUcsSUFBSSxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNKQUtOLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUxNLENBQVYsQyxDQVdQOztBQUNPLElBQU1JLE9BQU8sR0FBR1QseURBQU0sQ0FBQ1UsRUFBVjtBQUFBO0FBQUE7QUFBQSxxSkFVVCxVQUFDUixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FWUyxDQUFiLEMsQ0FlUDs7QUFDTyxJQUFNTSxlQUFlLEdBQUdYLHlEQUFNLENBQUNZLE1BQVY7QUFBQTtBQUFBO0FBQUEsc1FBbUJqQixVQUFDVixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FuQmlCLEVBc0JqQixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JTLEVBQW5DO0FBQUEsQ0F0QmlCLENBQXJCO0FBMkJBLElBQU1DLGVBQWUsR0FBR2QsaUVBQU0sQ0FBQ2UsaUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx1S0FLZjtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEdBQUcsR0FBSCxHQUFTLEtBQWhDO0FBQUEsQ0FMZSxFQU1iO0FBQUEsTUFBR0EsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sR0FBRyxZQUFILEdBQWtCLFdBQXpDO0FBQUEsQ0FOYSxFQVlqQixVQUFDZCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FaaUIsQ0FBckIsQyxDQW1CUDs7QUFFTyxJQUFNWSxXQUFXLEdBQUdqQix5REFBTSxDQUFDa0IsQ0FBVjtBQUFBO0FBQUE7QUFBQSw0SUFBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDAzZWMzM2ZlYmUxMmVmN2VhMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElvSW9zQXJyb3dEcm9wZG93biB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MHB4KTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgICBncmlkLXJvdy1nYXA6IDAuNXJlbTtcblxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IERpdjEgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBEaXYyID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDU7XG4gICAgXG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MyA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcbiAgfVxuYDtcblxuLy8gTmF2aWdhdGlvbiBMaW5rc1xuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuaDZgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbmA7XG5cbi8vLyBEcm9wRG93biBDb250YWN0XG5leHBvcnQgY29uc3QgQ29udGFjdERyb3BEb3duID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdlByb2R1Y3RzSWNvbiA9IHN0eWxlZChJb0lvc0Fycm93RHJvcGRvd24pYFxuICBtYXJnaW4tbGVmdDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgb3BhY2l0eTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICcxJyA6ICcuNzUnKX07XG4gIHRyYW5zZm9ybTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICdzY2FsZVkoLTEpJyA6ICdzY2FsZVkoMSknKX07XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW46IDJweCAwIDAgMnB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG5gO1xuXG5cbi8vIFNvY2lhbCBJY29ucyBcblxuZXhwb3J0IGNvbnN0IFNvY2lhbEljb25zID0gc3R5bGVkLmFgXG50cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG5jb2xvcjogYmxhY2s7XG5ib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4mOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICB9XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==