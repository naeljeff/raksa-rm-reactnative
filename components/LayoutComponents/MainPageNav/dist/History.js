"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SearchBarHistory_1 = require("../SearchBar/SearchBarHistory");
var History = function () {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState(''), searchByTerm = _b[0], setSearchByTerm = _b[1];
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col" },
        react_1["default"].createElement(SearchBarHistory_1["default"], { setSearchTerm: setSearchTerm, setSearchByTerm: setSearchByTerm, searchTab: "History" }),
        react_1["default"].createElement(react_native_1.Text, null, "History")));
};
exports["default"] = History;
