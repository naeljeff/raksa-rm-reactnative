"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Header_1 = require("../LayoutComponents/Header");
var StatusBar_1 = require("../LayoutComponents/StatusBar");
var Navbar_1 = require("../LayoutComponents/Navbar");
var JobMonitoring_1 = require("../LayoutComponents/MainPageNav/JobMonitoring");
var History_1 = require("../LayoutComponents/MainPageNav/History");
var MySurvey_1 = require("../LayoutComponents/MainPageNav/MySurvey");
var IncomingJobPage_1 = require("../LayoutComponents/MainPageNav/IncomingJobPage");
var MainPage = function (_a) {
    var route = _a.route;
    var _b = react_1.useState('Incoming Job'), menuOptions = _b[0], setMenuOptions = _b[1];
    var handleOptionChange = function (option) {
        setMenuOptions(option);
    };
    var renderComponent = function () {
        switch (menuOptions) {
            case 'Incoming Job':
                return react_1["default"].createElement(IncomingJobPage_1["default"], null);
            case 'Job Monitoring':
                return react_1["default"].createElement(JobMonitoring_1["default"], null);
            case 'My Survey':
                return react_1["default"].createElement(MySurvey_1["default"], null);
            case 'History':
                return react_1["default"].createElement(History_1["default"], null);
            default:
                return null;
        }
    };
    // const {username, password} = route.params;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col" },
        react_1["default"].createElement(Header_1["default"], { menuOption: menuOptions }),
        react_1["default"].createElement(StatusBar_1["default"], null),
        react_1["default"].createElement(Navbar_1["default"], { onMenuChange: handleOptionChange }),
        renderComponent()));
};
exports["default"] = MainPage;
