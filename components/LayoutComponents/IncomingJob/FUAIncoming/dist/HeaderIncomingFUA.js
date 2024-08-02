"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var HeaderIncomingFUA = function () {
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-[45px] px-1 flex flex-row justify-between items-center bg-[#f5af46] " },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: " flex flex-row gap-x-1", onPress: function () {
                    // console.log('pressed');
                    navigation.goBack();
                } },
                react_1["default"].createElement(Ionicons_1["default"], { name: "chevron-back", size: 20, color: "black" }),
                react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "RM"))),
        react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-semibold mr-12" }, "FUA"),
        react_1["default"].createElement(react_native_1.View, null)));
};
exports["default"] = HeaderIncomingFUA;
