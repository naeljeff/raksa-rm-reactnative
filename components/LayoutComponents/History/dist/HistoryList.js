"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var react_1 = require("react");
var HistoryList = function () {
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 w-full bg-[#f7ebd7]" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col justify-center items-center" },
            react_1["default"].createElement(MaterialIcons_1["default"], { name: "do-not-disturb-alt", size: 80, color: "black" }),
            react_1["default"].createElement(react_native_1.Text, { className: "italic text-gray-600 capitalize text-xl" }, "No History Found"))));
};
exports["default"] = HistoryList;
