"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_native_paper_1 = require("react-native-paper");
var function_1 = require("../../../utilities/function");
var JobListMenu_1 = require("./JobListMenu");
var Job = react_1["default"].memo(function (_a) {
    var item = _a.item, index = _a.index, navigation = _a.navigation;
    var dayDiff = function_1.calcAgingDate(item.createdAt);
    var formattedDate = function_1.formatDate(item.createdAt);
    var handleListPress = function () {
        console.log("Index: " + index + " | Item: " + item.noPengajuanSurvey);
        navigation.navigate('formFUAIncoming', {
            item: item
        });
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-screen py-0.5 px-1 border-b border-black" },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleListPress, className: "w-screen flex flex-row justify-start items-center" },
            react_1["default"].createElement(react_native_1.View, { className: "flex-[0.1] flex items-center justify-center " },
                react_1["default"].createElement(Ionicons_1["default"], { name: "mail", size: 24, color: "black" }),
                react_1["default"].createElement(react_native_paper_1.Badge, { className: "absolute bg-red-500 left-1 top-3.5", size: 16 }, "!")),
            react_1["default"].createElement(react_native_1.View, { className: "flex-[0.6] flex-col gap-y-1" },
                react_1["default"].createElement(react_native_1.Text, { className: "font-bold text-black uppercase" },
                    item.noPengajuanSurvey,
                    "/",
                    item.unitNo),
                react_1["default"].createElement(react_native_1.Text, { className: "text-black uppercase" },
                    item.merek,
                    " - ",
                    item.tipe,
                    " - ",
                    item.model,
                    " | ",
                    item.platNomor),
                react_1["default"].createElement(react_native_1.Text, { className: "text-black uppercase" }, item.noTelp),
                react_1["default"].createElement(react_native_1.Text, { className: "text-black uppercase" }, item.jenisAsuransi + " + " + item.perluasan.join('; ')),
                react_1["default"].createElement(react_native_1.Text, { className: "text-black uppercase" }, item.alamat)),
            react_1["default"].createElement(react_native_1.View, { className: "flex-[0.2] flex-col gap-y-1" },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black" },
                    dayDiff,
                    " Days"),
                react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, formattedDate)),
            react_1["default"].createElement(react_native_1.View, { className: "flex-[0.1] flex-col justify-center items-center pr-1.5" },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize mb-2" }, item.status),
                react_1["default"].createElement(JobListMenu_1["default"], { item: item })))));
});
exports["default"] = Job;
