"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var Feather_1 = require("react-native-vector-icons/Feather");
var react_1 = require("react");
var react_native_paper_1 = require("react-native-paper");
var SearchBy_1 = require("./SearchBy");
var SearchBarHistory = function (_a) {
    var setSearchTerm = _a.setSearchTerm, setSearchByTerm = _a.setSearchByTerm, searchTab = _a.searchTab;
    var _b = react_1.useState(''), localSearch = _b[0], setLocalSearch = _b[1];
    var _c = react_1.useState(false), searchBy = _c[0], setSearchBy = _c[1];
    var _d = react_1.useState(''), sortOrder = _d[0], setSortOrder = _d[1];
    var _e = react_1.useState(''), selected = _e[0], setSelected = _e[1];
    var handleClearPress = function () {
        setLocalSearch('');
        setSearchBy(false);
        setSearchTerm('');
    };
    var onSearchByChange = function (selection) {
        setSelected(selection);
        setSearchByTerm(selection);
    };
    var handleInputChange = function (text) {
        setLocalSearch(text);
        setSearchBy(true);
        setSearchTerm(text);
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-[80px] bg-[#ffffea] flex flex-col justify-center items-start" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full p-1 mt-1 ml-0.5 pr-2 flex flex-row justify-between items-center" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-start my-1" },
                react_1["default"].createElement(react_native_1.View, { className: "w-full h-[30px] px-3 flex flex-row justify-start items-center border border-black rounded-lg bg-white" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log('searched'); } },
                        react_1["default"].createElement(Ionicons_1["default"], { name: "search", size: 18 })),
                    react_1["default"].createElement(react_native_1.TextInput, { className: "w-[50%] text-black mr-8 py-1 placeholder:text-sm", placeholder: "Search", style: { fontSize: 12, color: 'black' }, value: localSearch, onChangeText: handleInputChange }),
                    localSearch.length > 0 && (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleClearPress, className: "absolute right-36" },
                        react_1["default"].createElement(Ionicons_1["default"], { name: "close", size: 20 }))),
                    react_1["default"].createElement(react_native_1.View, { className: "h-[70%] flex justify-center items-center border-r border-black mx-2" }),
                    react_1["default"].createElement(react_native_1.View, { className: "h-[50px] w-full -ml-4 mb-1" },
                        react_1["default"].createElement(SearchBy_1["default"], { onSearchByChange: onSearchByChange, searchTab: searchTab }))))),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row justify-between items-center mb-1" },
            react_1["default"].createElement(react_native_1.View, { className: "w-[55%] h-[40px] flex flex-row gap-x-1 ml-0.5" }),
            react_1["default"].createElement(react_native_1.View, { className: "flex flex-row justify-center items-center gap-x-2 mb-2 mr-2" },
                react_1["default"].createElement(react_native_paper_1.Surface, { elevation: 2, className: "rounded-lg" },
                    react_1["default"].createElement(react_native_1.View, { className: "px-1 py-1 bg-white rounded-lg" },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log('Add'); } },
                            react_1["default"].createElement(Ionicons_1["default"], { name: "add", size: 20, style: { color: 'black' } })))),
                react_1["default"].createElement(react_native_paper_1.Surface, { elevation: 2, className: "roundedlg" },
                    react_1["default"].createElement(react_native_1.View, { className: "px-1 py-1 bg-white rounded-lg" },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log('upload'); } },
                            react_1["default"].createElement(Feather_1["default"], { name: "upload", size: 20, style: { color: 'black' } }))))))));
};
exports["default"] = SearchBarHistory;
