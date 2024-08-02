"use strict";
exports.__esModule = true;
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var react_1 = require("react");
var SortBy = function (_a) {
    var onSortByChange = _a.onSortByChange;
    var _b = react_1.useState(''), sortBy = _b[0], setSortBy = _b[1];
    var sortByList = [
        { name: 'Aging', value: 'aging' },
        { name: 'None', value: 'none' },
    ];
    var handleSortByChange = function (selection) {
        if (selection.value === 'none') {
            setSortBy(selection.name);
            onSortByChange('');
        }
        else {
            setSortBy(selection.value);
            onSortByChange(selection.value);
        }
    };
    return (react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { data: sortByList, activeColor: "#f7ebd7", maxHeight: 300, labelField: "name", valueField: "value", placeholder: "Sort By", searchPlaceholder: "Sort By", value: sortBy, selectedTextStyle: { fontSize: 12, color: 'black' }, itemTextStyle: { fontSize: 12, color: 'black' }, inputSearchStyle: { fontSize: 12, color: 'black' }, placeholderStyle: { fontSize: 12, color: 'black' }, style: { paddingHorizontal: 4 }, onChange: function (selection) { return handleSortByChange(selection); } }));
};
exports["default"] = SortBy;
