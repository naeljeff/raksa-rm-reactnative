"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var react_1 = require("react");
var Status = function (_a) {
    var item = _a.item, onSelect = _a.onSelect;
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSelect(item); }, className: "py-2.5" },
        react_1["default"].createElement(react_native_1.Text, { className: "uppercase text-black pl-1" }, item)));
};
var SurveyFUAStatus = function (_a) {
    var openFUAStatus = _a.openFUAStatus, statusFUA = _a.statusFUA;
    var status = ['ongoing', 'reschedule', 'schedule', 'cancel'];
    var handleSelectedStatus = function (status) {
        statusFUA(status);
        openFUAStatus(false);
    };
    return (react_1["default"].createElement(react_native_paper_1.Portal, null,
        react_1["default"].createElement(react_native_paper_1.Modal, { dismissable: false, visible: true, onDismiss: function () { return openFUAStatus(false); }, contentContainerStyle: {
                backgroundColor: '#f7ebd7',
                borderRadius: 12,
                margin: 20
            } },
            react_1["default"].createElement(react_native_1.View, { className: "h-[35px] bg-[#f5af46] rounded-t-xl" },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-center font-semibold p-2" }, "Please Select FUA Status")),
            react_1["default"].createElement(react_native_1.FlatList, { data: status, keyExtractor: function (item) { return item; }, className: "px-4 mb-24", renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(Status, { item: item, onSelect: handleSelectedStatus }),
                        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black/10" })));
                } }),
            react_1["default"].createElement(react_native_1.View, { className: 'w-full flex justify-center items-center mb-3' },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return openFUAStatus(false); }, className: "w-20 bg-slate-100 border border-black rounded-lg px-2 py-1" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-center text-black" }, "Close"))))));
};
exports["default"] = SurveyFUAStatus;
