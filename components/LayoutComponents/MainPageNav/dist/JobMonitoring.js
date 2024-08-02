"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SearchBarInput_1 = require("../SearchBar/SearchBarInput");
var Information_1 = require("../Information");
var JobMonitoring = function () {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState(''), searchByTerm = _b[0], setSearchByTerm = _b[1];
    var _c = react_1.useState(''), sortBy = _c[0], setSortBy = _c[1];
    var _d = react_1.useState(''), orderBy = _d[0], setOrderBy = _d[1];
    return (react_1["default"].createElement(react_native_1.View, { className: "flex flex-1 flex-col" },
        react_1["default"].createElement(SearchBarInput_1["default"], { setSearchTerm: setSearchTerm, searchTab: "JobMonitoring", setSearchByTerm: setSearchByTerm, setSortBy: setSortBy, setOrderBy: setOrderBy }),
        react_1["default"].createElement(Information_1["default"], null)));
};
exports["default"] = JobMonitoring;
