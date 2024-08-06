"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_date_picker_1 = require("react-native-date-picker");
var react_1 = require("react");
var FontAwesome6_1 = require("react-native-vector-icons/FontAwesome6");
var SurveyFUAStatus_1 = require("./FUASurveyModal/SurveyFUAStatus");
var SurveyFUA = react_1["default"].memo(function (_a) {
    var noPengajuanSurvey = _a.noPengajuanSurvey, unitNo = _a.unitNo;
    var _b = react_1.useState(noPengajuanSurvey), noPengajuan = _b[0], setNoPengajuan = _b[1];
    var _c = react_1.useState(undefined), contactDate = _c[0], setContactDate = _c[1];
    var _d = react_1.useState(false), isOpenContactDate = _d[0], setIsOpenContactDate = _d[1];
    var _e = react_1.useState(undefined), appointmentDate = _e[0], setAppointmentDate = _e[1];
    var _f = react_1.useState(false), isOpenAppointmentDate = _f[0], setIsOpenAppointmentDate = _f[1];
    var _g = react_1.useState(false), isStatusOpen = _g[0], setIsStatusOpen = _g[1];
    var _h = react_1.useState('ongoing'), FUAStatus = _h[0], setFUAStatus = _h[1];
    var onConfirmContactDate = function (date) {
        setIsOpenContactDate(false);
        setContactDate(date);
    };
    var closeContactDate = function () {
        setIsOpenContactDate(false);
    };
    var onConfirmAppointmentDate = function (date) {
        setIsOpenAppointmentDate(false);
        setAppointmentDate(date);
    };
    var closeAppointmentDate = function () {
        setIsOpenAppointmentDate(false);
    };
    var formatDateString = function (date) {
        if (!date)
            return '';
        var day = date.getDate().toString().padStart(2, '0');
        var month = date.toLocaleString('en-US', { month: 'short' });
        var year = date.getFullYear().toString().slice(-2);
        var hours = date.getHours().toString().padStart(2, '0');
        var minutes = date.getMinutes().toString().padStart(2, '0');
        return day + "-" + month + "-" + year + " " + hours + ":" + minutes;
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-start justify-center mb-4" },
        react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3" }, "Follow Up Activity"),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mb-2" }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col justify-center items-start space-y-2 px-3" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Contact Date"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_date_picker_1["default"], { modal: true, open: isOpenContactDate, date: contactDate !== null && contactDate !== void 0 ? contactDate : new Date(), locale: "en-GB", onConfirm: onConfirmContactDate, onCancel: closeContactDate }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsOpenContactDate(true); }, className: "flex-1" },
                    react_1["default"].createElement(react_native_1.TextInput, { value: formatDateString(contactDate), editable: false, placeholder: "Select Contact Date", className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" }))),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Appointment Date"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_date_picker_1["default"], { modal: true, open: isOpenAppointmentDate, date: appointmentDate !== null && appointmentDate !== void 0 ? appointmentDate : new Date(), locale: "en-GB", onConfirm: onConfirmAppointmentDate, onCancel: closeAppointmentDate }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsOpenAppointmentDate(true); }, className: "flex-1" },
                    react_1["default"].createElement(react_native_1.TextInput, { value: formatDateString(appointmentDate), editable: false, placeholder: "Select Appointment Date", className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" }))),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Address"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, multiline: true, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Status"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsStatusOpen(true); }, className: "relative flex-1 flex-row items-center border border-gray-300 bg-gray-100 rounded pr-3" },
                    react_1["default"].createElement(react_native_1.TextInput, { value: FUAStatus, editable: false, className: "flex-1 text-black text-xs uppercase py-1 px-2" }),
                    react_1["default"].createElement(FontAwesome6_1["default"], { name: isStatusOpen ? "chevron-up" : "chevron-down", size: 16, color: "black" })),
                isStatusOpen && react_1["default"].createElement(SurveyFUAStatus_1["default"], { openFUAStatus: setIsStatusOpen, statusFUA: setFUAStatus })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Remarks"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, multiline: true, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })))));
});
exports["default"] = SurveyFUA;
