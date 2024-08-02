"use strict";
var _a;
exports.__esModule = true;
exports.selectWebViewUrl = exports.clearWebViewUrl = exports.setWebViewUrl = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    url: null
};
var webViewSlice = toolkit_1.createSlice({
    name: 'webView',
    initialState: initialState,
    reducers: {
        setWebViewUrl: function (state, action) {
            state.url = action.payload;
        },
        clearWebViewUrl: function (state) {
            state.url = null;
        }
    }
});
exports.setWebViewUrl = (_a = webViewSlice.actions, _a.setWebViewUrl), exports.clearWebViewUrl = _a.clearWebViewUrl;
exports.selectWebViewUrl = function (state) { return state.webView.url; };
exports["default"] = webViewSlice.reducer;
