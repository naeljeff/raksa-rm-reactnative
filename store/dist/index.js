"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var surveySlice_1 = require("./slices/surveySlice");
var userSlice_1 = require("./slices/userSlice");
var processedSurveySlice_1 = require("./slices/processedSurveySlice");
var webviewSlice_1 = require("./slices/webviewSlice");
var store = toolkit_1.configureStore({
    reducer: {
        // List reducer
        survey: surveySlice_1["default"],
        user: userSlice_1["default"],
        processedSurvey: processedSurveySlice_1["default"],
        webView: webviewSlice_1["default"]
    }
});
exports["default"] = store;
