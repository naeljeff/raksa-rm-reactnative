"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_native_paper_1 = require("react-native-paper");
var function_1 = require("../../../utilities/function");
var MonitoringSubList = function (_a) {
    var item = _a.item, index = _a.index, navigation = _a.navigation;
    var dayDiff = function_1.calcAgingDate(item.createdAt);
    var formattedDate = function_1.formatDate(item.createdAt);
    var handleMonitoringSubListPress = function () {
        console.log("Index: " + index + " | Item: " + item.noPengajuanSurvey);
        navigation.navigate('formFUAIncoming', {
            item: item
        });
    };
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleMonitoringSubListPress, className: "w-screen flex flex-row justify-start items-center" },
        react_1["default"].createElement(react_native_1.View, { className: "flex-[0.1] flex items-center justify-center " },
            react_1["default"].createElement(Ionicons_1["default"], { name: "mail", size: 24, color: "black" }),
            react_1["default"].createElement(react_native_paper_1.Badge, { className: "absolute bg-red-500 left-1 top-3.5", size: 16 }, "!")),
        react_1["default"].createElement(react_native_1.View, { className: "flex-[0.5] flex-col gap-y-1" },
            react_1["default"].createElement(react_native_1.Text, { className: "font-bold text-black uppercase" },
                item.noPengajuanSurvey,
                "/",
                item.unitNo),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" },
                item.merek,
                " - ",
                item.tipe,
                " - ",
                item.model,
                " | ",
                item.platNomor),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" }, item.noTelp),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" }, item.jenisAsuransi + " + " + item.perluasan.join('; ')),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" }, item.alamat)),
        react_1["default"].createElement(react_native_1.View, { className: "flex-[0.2] flex-col gap-y-1 -mr-5 ml-1" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black font-semibold uppercase mb-2" }, item.status),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black" },
                dayDiff,
                " Days"),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black" }, formattedDate)),
        react_1["default"].createElement(react_native_1.View, { className: "flex-[0.2] flex-col justify-center items-center pr-1.5" },
            react_1["default"].createElement(react_native_paper_1.Surface, { className: "justify-center items-center border bg-white border-black rounded px-2 py-0.5", elevation: 2 },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log("Pressed: " + item.nama); } },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black tracking-tighter" }, "Reassign"))))));
};
exports["default"] = MonitoringSubList;
