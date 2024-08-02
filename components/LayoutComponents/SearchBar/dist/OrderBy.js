"use strict";
exports.__esModule = true;
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var react_1 = require("react");
var OrderBy = function (_a) {
    var onOrderByChange = _a.onOrderByChange;
    var _b = react_1.useState(''), orderBy = _b[0], setOrderBy = _b[1];
    var orderList = [
        { name: 'Ascending', value: 'asc' },
        { name: 'Descending', value: 'dsc' },
    ];
    var handleOrderByChange = function (selection) {
        setOrderBy(selection.value);
        onOrderByChange(selection.value);
    };
    return (react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { data: orderList, activeColor: "#f7ebd7", maxHeight: 200, labelField: "name", valueField: "value", placeholder: "Order By", searchPlaceholder: "Order By", value: orderBy, selectedTextStyle: { fontSize: 12, color: 'black' }, itemTextStyle: { fontSize: 12, color: 'black' }, inputSearchStyle: { fontSize: 12, color: 'black' }, placeholderStyle: { fontSize: 12, color: 'black' }, style: { paddingHorizontal: 4, paddingTop: -2 }, onChange: function (selection) { return handleOrderByChange(selection); } }));
};
exports["default"] = OrderBy;
