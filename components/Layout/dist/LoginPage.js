"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var LoginHeader_1 = require("../Login/LoginHeader");
var LoginForm_1 = require("../Login/LoginForm");
var LoginPage = function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(react_native_1.View, { className: "h-full w-full flex flex-col justify-center items-center bg-[#f7ebd7]" },
        react_1["default"].createElement(LoginHeader_1["default"], null),
        react_1["default"].createElement(LoginForm_1["default"], { navigation: navigation })));
};
exports["default"] = LoginPage;
