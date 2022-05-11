webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Footer/FooterStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/FooterStyles.js ***!
  \***********************************************/
/*! exports provided: FooterWrapper, LinkItem, SocialIconsContainer, CompanyContainer, Slogan, SocialContainer, LinkList, LinkColumn, LinkTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkItem", function() { return LinkItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIconsContainer", function() { return SocialIconsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyContainer", function() { return CompanyContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slogan", function() { return Slogan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialContainer", function() { return SocialContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkList", function() { return LinkList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkColumn", function() { return LinkColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkTitle", function() { return LinkTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "FooterStyles__FooterWrapper",
  componentId: "sc-1st6mbx-0"
})(["width:100%;padding:2rem 48px 40px;margin:1rem auto;box-sizing:border-box;@media ", "{padding:0 16px 48px;width:calc(100vw - 32px);}"], function (props) {
  return props.theme.breakpoints.sm;
});
var LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "FooterStyles__LinkItem",
  componentId: "sc-1st6mbx-1"
})(["font-size:18px;line-height:30px;color:black;margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ", "{font-size:16px;line-height:28px;display:flex;}@media ", "{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SocialIconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterStyles__SocialIconsContainer",
  componentId: "sc-1st6mbx-2"
})(["max-width:1040px;display:flex;justify-content:space-between;@media ", "{display:flex;justify-content:space-between;}@media ", "{display:flex;width:100%;flex-direction:column;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterStyles__CompanyContainer",
  componentId: "sc-1st6mbx-3"
})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ", "{flex-direction:column;align-items:baseline;}@media ", "{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Slogan = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "FooterStyles__Slogan",
  componentId: "sc-1st6mbx-4"
})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ", "{font-size:16px;line-height:28px;}@media ", "{line-height:22px;font-size:14px;min-width:100px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterStyles__SocialContainer",
  componentId: "sc-1st6mbx-5"
})(["display:flex;align-items:center;@media ", "{justify-content:center;padding-right:16px;flex-wrap:wrap;}"], function (props) {
  return props.theme.breakpoints.md;
});
var LinkList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "FooterStyles__LinkList",
  componentId: "sc-1st6mbx-6"
})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ", "{padding:32px 0 16px;}@media ", "{width:100%;padding:32px 0 16px;gap:16px;}@media ", "{width:100%;padding:32px 4px 16px;gap:5px;}"], function (props) {
  return props.theme.breakpoints.lg;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var LinkColumn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterStyles__LinkColumn",
  componentId: "sc-1st6mbx-7"
})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]);
var LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4.withConfig({
  displayName: "FooterStyles__LinkTitle",
  componentId: "sc-1st6mbx-8"
})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:black;margin-bottom:16px;@media ", "{font-size:10px;line-height:12px;margin-bottom:8px;}"], function (props) {
  return props.theme.breakpoints.sm;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJGb290ZXJXcmFwcGVyIiwic3R5bGVkIiwic2VjdGlvbiIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtIiwiTGlua0l0ZW0iLCJhIiwibWQiLCJTb2NpYWxJY29uc0NvbnRhaW5lciIsImRpdiIsIkNvbXBhbnlDb250YWluZXIiLCJTbG9nYW4iLCJwIiwiU29jaWFsQ29udGFpbmVyIiwiTGlua0xpc3QiLCJ1bCIsImxnIiwiTGlua0NvbHVtbiIsIkxpbmtUaXRsZSIsImg0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLDRJQVFmLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQVJVLENBQW5CO0FBY0EsSUFBTUMsUUFBUSxHQUFHTix5REFBTSxDQUFDTyxDQUFWO0FBQUE7QUFBQTtBQUFBLDBTQWNYLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkksRUFBNUI7QUFBQSxDQWRNLEVBb0JYLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQXBCTSxDQUFkO0FBNkJBLElBQU1JLG9CQUFvQixHQUFHVCx5REFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLHdMQUt4QixVQUFBUixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JJLEVBQTVCO0FBQUEsQ0FMbUIsRUFVeEIsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBVm1CLENBQTFCO0FBaUJBLElBQU1NLGdCQUFnQixHQUFHWCx5REFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLHVOQU9uQixVQUFBUixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JJLEVBQTVCO0FBQUEsQ0FQYyxFQVluQixVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FaYyxDQUF0QjtBQXFCQSxJQUFNTyxNQUFNLEdBQUdaLHlEQUFNLENBQUNhLENBQVY7QUFBQTtBQUFBO0FBQUEsa09BUVQsVUFBQVgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQUE1QjtBQUFBLENBUkksRUFhVCxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FiSSxDQUFaO0FBb0JBLElBQU1TLGVBQWUsR0FBR2QseURBQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSwrR0FJbEIsVUFBQVIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQUE1QjtBQUFBLENBSmEsQ0FBckI7QUFZQSxJQUFNTyxRQUFRLEdBQUdmLHlEQUFNLENBQUNnQixFQUFWO0FBQUE7QUFBQTtBQUFBLDZSQU9YLFVBQUFkLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QmEsRUFBNUI7QUFBQSxDQVBNLEVBV1gsVUFBQWYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQUE1QjtBQUFBLENBWE0sRUFnQlgsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBaEJNLENBQWQ7QUF1QkEsSUFBTWEsVUFBVSxHQUFHbEIseURBQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSxzRUFBaEI7QUFNQSxJQUFNUyxTQUFTLEdBQUduQix5REFBTSxDQUFDb0IsRUFBVjtBQUFBO0FBQUE7QUFBQSxrTUFTWixVQUFBbEIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBVE8sQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYjI2YjQ1ZDVjNzM3OGJkY2Y1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuXG5cdHdpZHRoOjEwMCU7XG5cbiAgcGFkZGluZzogMnJlbSA0OHB4IDQwcHg7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogMCAxNnB4IDQ4cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlua0l0ZW0gPSBzdHlsZWQuYWBcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0Y29sb3I6IGJsYWNrO1xuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsZWZ0OiAwO1xuXG5cdCY6aG92ZXIge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGxlZnQ6IDZweDtcblx0fVxuXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdGZvbnQtc2l6ZTogOHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxNHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IFNvY2lhbEljb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbm1heC13aWR0aDogMTA0MHB4O1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5gXG5cbmV4cG9ydCBjb25zdCBDb21wYW55Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6YmFzZWxpbmU7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cdH1cblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdG1hcmdpbjogMCAwIDMycHg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuYFxuXG5cbmV4cG9ydCBjb25zdCBTbG9nYW4gPSBzdHlsZWQucGBcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblx0bWluLXdpZHRoOiAyODBweDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0cGFkZGluZzogMXJlbTtcblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHR9XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRtaW4td2lkdGg6IDEwMHB4O1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0fVxuYFxuXG5cbmV4cG9ydCBjb25zdCBMaW5rTGlzdCA9IHN0eWxlZC51bGBcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDg1cHgsIDIyMHB4KSk7XG5cdGdhcDogNDBweDtcbiAgcGFkZGluZzogNDBweCAwIDI4cHg7XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcblx0XHRwYWRkaW5nOiAzMnB4IDAgMTZweDtcblx0fVxuXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMzJweCAwIDE2cHg7XG5cdFx0Z2FwOiAxNnB4O1xuXHR9XG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMzJweCA0cHggMTZweDtcblx0XHRnYXA6IDVweDtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgTGlua0NvbHVtbiA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1heC13aWR0aDogMjIwcHg7XG5cdHdpZHRoOiAxMDAlO1xuYFxuZXhwb3J0IGNvbnN0IExpbmtUaXRsZSA9IHN0eWxlZC5oNGBcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRjb2xvcjpibGFjaztcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTJweDtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=