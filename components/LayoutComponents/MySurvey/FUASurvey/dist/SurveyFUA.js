"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var datetimepicker_1 = require("@react-native-community/datetimepicker");
var react_1 = require("react");
var SurveyFUA = react_1["default"].memo(function (_a) {
    var noPengajuanSurvey = _a.noPengajuanSurvey, unitNo = _a.unitNo;
    var _b = react_1.useState(noPengajuanSurvey), noPengajuan = _b[0], setNoPengajuan = _b[1];
    var _c = react_1.useState(undefined), contactDate = _c[0], setContactDate = _c[1];
    var _d = react_1.useState(false), isOpenContactDate = _d[0], setIsOpenContactDate = _d[1];
    var _e = react_1.useState(undefined), appointmentDate = _e[0], setAppointmentDate = _e[1];
    var _f = react_1.useState(false), isOpenAppointmentDate = _f[0], setIsOpenAppointmentDate = _f[1];
    var toggleContactDate = function () {
        setIsOpenContactDate(!isOpenContactDate);
    };
    var onChangeContactDate = function (event, selectedDate) {
        if (selectedDate) {
            setContactDate(selectedDate);
        }
        setIsOpenContactDate(!isOpenContactDate);
    };
    var toggleAppointmentDate = function () {
        setIsOpenAppointmentDate(!isOpenAppointmentDate);
    };
    var onChangeAppointmentDate = function (event, selectedDate) {
        if (selectedDate) {
            setAppointmentDate(selectedDate);
        }
        setIsOpenAppointmentDate(!isOpenAppointmentDate);
    };
    var formatDateString = function (date) {
        if (!date)
            return '';
        var day = date.getDate().toString().padStart(2, '0');
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var year = date.getFullYear().toString().slice(-2);
        return day + "-" + month + "-" + year;
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-start justify-center mb-4" },
        react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3" }, "Follow Up Activity"),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mb-2" }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col justify-center items-start space-y-2 px-3" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Contact Date"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                isOpenContactDate && (react_1["default"].createElement(datetimepicker_1["default"], { mode: "date", onChange: onChangeContactDate, value: contactDate !== null && contactDate !== void 0 ? contactDate : new Date() })),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: toggleContactDate, className: "flex-1" },
                    react_1["default"].createElement(react_native_1.TextInput, { value: formatDateString(contactDate), editable: false, placeholder: "Select Contact Date", className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" }))),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Appointment Date"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                isOpenAppointmentDate && (react_1["default"].createElement(datetimepicker_1["default"], { mode: "date", onChange: onChangeAppointmentDate, value: appointmentDate !== null && appointmentDate !== void 0 ? appointmentDate : new Date() })),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: toggleAppointmentDate, className: "flex-1" },
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
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Remarks"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, multiline: true, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })))));
});
exports["default"] = SurveyFUA;
