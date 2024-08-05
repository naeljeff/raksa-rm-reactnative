"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var HeaderIncomingFUA_1 = require("../LayoutComponents/IncomingJob/FUAIncoming/HeaderIncomingFUA");
var SurveyAppointment_1 = require("../LayoutComponents/MySurvey/FUASurvey/SurveyAppointment");
var SurveyPersonalContact_1 = require("../LayoutComponents/MySurvey/FUASurvey/SurveyPersonalContact");
var SurveyCoorporateContact_1 = require("../LayoutComponents/MySurvey/FUASurvey/SurveyCoorporateContact");
var SurveyFUA_1 = require("../LayoutComponents/MySurvey/FUASurvey/SurveyFUA");
var MySurveyFUAPage = function (_a) {
    var route = _a.route;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-[#f7ebd7]" },
        react_1["default"].createElement(HeaderIncomingFUA_1["default"], null),
        react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true },
            react_1["default"].createElement(SurveyAppointment_1["default"], null),
            react_1["default"].createElement(SurveyPersonalContact_1["default"], null),
            react_1["default"].createElement(SurveyCoorporateContact_1["default"], null),
            react_1["default"].createElement(SurveyFUA_1["default"], null))));
};
exports["default"] = MySurveyFUAPage;
