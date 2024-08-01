"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var Job_1 = require("./Job");
var function_1 = require("../../../utilities/function");
var JobList = function (_a) {
    var data = _a.data, search = _a.search, refreshing = _a.refreshing, onRefresh = _a.onRefresh, searchByTerm = _a.searchByTerm, navigation = _a.navigation, sortBy = _a.sortBy, orderBy = _a.orderBy;
    var _b = react_1.useState(1), page = _b[0], setPage = _b[1];
    var _c = react_1.useState(false), loadMore = _c[0], setLoadMore = _c[1];
    var pageSize = 10;
    var filterData = react_1.useMemo(function () {
        var filtered = searchByTerm === ''
            ? data.filter(function (item) {
                return Object.values(item).some(function (value) {
                    return value.toString().toLowerCase().includes(search.toLowerCase());
                });
            })
            : data.filter(function (item) {
                return typeof item[searchByTerm] === 'string' &&
                    item[searchByTerm]
                        .toLowerCase()
                        .includes(search.toLowerCase());
            });
        return filtered;
    }, [data, search, searchByTerm]);
    var sortedDataByDate = react_1.useMemo(function () {
        var sortedData = __spreadArrays(filterData);
        if (sortBy === 'aging') {
            sortedData.sort(function (a, b) {
                var agingA = function_1.calcAgingDate(a.createdAt);
                var agingB = function_1.calcAgingDate(b.createdAt);
                return orderBy === 'asc' ? agingA - agingB : agingB - agingA;
            });
        }
        else {
            sortedData.sort(function (a, b) {
                var dateA = new Date(a.createdAt).getTime();
                var dateB = new Date(b.createdAt).getTime();
                if (sortBy === '') {
                    return orderBy === 'asc' ? dateA - dateB : dateB - dateA;
                }
                else {
                    return orderBy === 'asc' ? dateA - dateB : dateB - dateA;
                }
            });
        }
        return sortedData;
    }, [filterData, sortBy, orderBy]);
    var paginatedData = react_1.useMemo(function () {
        return sortedDataByDate.slice(0, page * pageSize);
    }, [sortedDataByDate, page]);
    // Reset page when orderBy or sortBy changes
    react_1.useEffect(function () {
        setPage(1);
    }, [sortBy, orderBy, search, searchByTerm]);
    var handleLoadMore = react_1.useCallback(function () {
        if (loadMore || paginatedData.length >= sortedDataByDate.length)
            return;
        setLoadMore(true);
        setTimeout(function () {
            setPage(function (prevPage) { return prevPage + 1; });
            setLoadMore(false);
        }, 1000);
    }, [loadMore, paginatedData.length, sortedDataByDate.length]);
    var renderItem = react_1.useCallback(function (_a) {
        var item = _a.item, index = _a.index;
        return (react_1["default"].createElement(Job_1["default"], { item: item, index: index, navigation: navigation }));
    }, [navigation]);
    var getKey = react_1.useCallback(function (item, index) { return item.rowid + "-" + index; }, []);
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 w-full bg-[#ffffea]" }, filterData.length === 0 ? (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col justify-center items-center" },
        react_1["default"].createElement(MaterialIcons_1["default"], { name: "do-not-disturb-alt", size: 80, color: "black" }),
        react_1["default"].createElement(react_native_1.Text, { className: "italic text-gray-600 capitalize text-xl" }, "No Data Found"))) : (react_1["default"].createElement(react_native_1.FlatList, { data: paginatedData, renderItem: renderItem, keyExtractor: getKey, refreshControl: react_1["default"].createElement(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: onRefresh }), onEndReached: handleLoadMore, onEndReachedThreshold: 0.5, initialNumToRender: pageSize, maxToRenderPerBatch: pageSize, windowSize: 11, removeClippedSubviews: true }))));
};
exports["default"] = JobList;
