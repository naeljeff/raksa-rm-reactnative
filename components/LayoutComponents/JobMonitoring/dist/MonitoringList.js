"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var Monitoring_1 = require("./Monitoring");
var MonitoringList = function () {
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var _b = react_1.useState(false), loadMore = _b[0], setLoadMore = _b[1];
    var tempData = [
        {
            id: 1,
            nama: 'Isti marlisah',
            jumlahTask: 3
        },
        {
            id: 2,
            nama: 'John Doe',
            jumlahTask: 13
        },
        {
            id: 3,
            nama: 'John Smith',
            jumlahTask: 23
        },
        {
            id: 4,
            nama: 'Aaron Smith',
            jumlahTask: 33
        },
        {
            id: 5,
            nama: 'Bob Curtney',
            jumlahTask: 43
        },
        {
            id: 6,
            nama: 'Isti marlisah',
            jumlahTask: 3
        },
        {
            id: 7,
            nama: 'John Doe',
            jumlahTask: 13
        },
        {
            id: 8,
            nama: 'John Smith',
            jumlahTask: 23
        },
        {
            id: 9,
            nama: 'Aaron Smith',
            jumlahTask: 33
        },
        {
            id: 10,
            nama: 'Bob Curtney',
            jumlahTask: 43
        },
        {
            id: 11,
            nama: 'Isti marlisah',
            jumlahTask: 3
        },
        {
            id: 12,
            nama: 'John Doe',
            jumlahTask: 13
        },
        {
            id: 13,
            nama: 'John Smith',
            jumlahTask: 23
        },
        {
            id: 14,
            nama: 'Aaron Smith',
            jumlahTask: 33
        },
        {
            id: 15,
            nama: 'Bob Curtney',
            jumlahTask: 43
        },
    ];
    var renderItem = react_1.useCallback(function (_a) {
        var item = _a.item, index = _a.index;
        return (react_1["default"].createElement(Monitoring_1["default"], { item: item, index: index }));
    }, []);
    var getKey = react_1.useCallback(function (item) { return item.id.toString(); }, []);
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 w-full bg-[#f7ebd7]" }, tempData.length === 0 ? (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col justify-center items-center" },
        react_1["default"].createElement(MaterialIcons_1["default"], { name: "do-not-disturb-alt", size: 80, color: "black" }),
        react_1["default"].createElement(react_native_1.Text, { className: "italic text-gray-600 capitalize text-xl" }, "No Data Found"))) : (react_1["default"].createElement(react_native_1.FlatList, { data: tempData, keyExtractor: getKey, renderItem: renderItem }))));
};
exports["default"] = MonitoringList;
