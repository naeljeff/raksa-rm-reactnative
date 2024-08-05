"use strict";
exports.__esModule = true;
exports.calcAgingDate = exports.formatDateENGB = exports.formatDate = void 0;
exports.formatDate = function (date) {
    var itemDate = new Date(date);
    var formattedDate = String(itemDate.getDate()).padStart(2, '0') + "-" + itemDate.toLocaleString('en-US', { month: 'short' }) + "-" + String(itemDate.getFullYear()).slice(-2);
    return formattedDate;
};
exports.formatDateENGB = function (dateString) {
    var date = new Date(dateString);
    var options = {
        day: '2-digit',
        month: 'short',
        year: '2-digit'
    };
    var formatter = new Intl.DateTimeFormat('en-GB', options);
    var _a = formatter.format(date).toUpperCase().split(' '), day = _a[0], month = _a[1], year = _a[2];
    return day + "-" + month + "-" + year;
};
exports.calcAgingDate = function (date) {
    var itemDate = new Date(date);
    var currDate = new Date();
    var dayDiff = Math.round((currDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24));
    return dayDiff;
};
