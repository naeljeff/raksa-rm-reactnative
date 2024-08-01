"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var Survey_1 = require("./Survey");
var MySurveyList = function (_a) {
    var data = _a.data, search = _a.search, refreshing = _a.refreshing, onRefresh = _a.onRefresh, searchByTerm = _a.searchByTerm, navigation = _a.navigation;
    var _b = react_1.useState(1), page = _b[0], setPage = _b[1];
    var _c = react_1.useState(false), loadMore = _c[0], setLoadMore = _c[1];
    var pageSize = 10;
    var filterProcessedData = react_1.useMemo(function () {
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
        return filterProcessedData.sort(function (a, b) {
            var dateA = new Date(a.createdAt).getTime();
            var dateB = new Date(b.createdAt).getTime();
            return dateB - dateA;
        });
    }, [filterProcessedData]);
    var paginatedData = react_1.useMemo(function () {
        return sortedDataByDate.slice(0, page * pageSize);
    }, [sortedDataByDate, page]);
    var handleLoadMore = react_1.useCallback(function () {
        if (loadMore || paginatedData.length >= sortedDataByDate.length)
            return;
        setLoadMore(true);
        setTimeout(function () {
            setPage(page + 1);
            setLoadMore(false);
        }, 1000);
    }, [loadMore, paginatedData.length, sortedDataByDate.length]);
    var renderItem = react_1.useCallback(function (_a) {
        var item = _a.item, index = _a.index;
        return (react_1["default"].createElement(Survey_1["default"], { item: item, index: index, navigation: navigation }));
    }, [navigation]);
    var getKey = react_1.useCallback(function (item, index) { return item.rowid + "-" + index; }, []);
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 w-full bg-[#ffffea]" }, filterProcessedData.length === 0 ? (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col justify-center items-center" },
        react_1["default"].createElement(MaterialIcons_1["default"], { name: "do-not-disturb-alt", size: 80, color: "black" }),
        react_1["default"].createElement(react_native_1.Text, { className: "italic text-gray-600 capitalize text-xl" }, "No Survey Found"))) : (react_1["default"].createElement(react_native_1.FlatList, { data: paginatedData, renderItem: renderItem, keyExtractor: getKey, refreshControl: react_1["default"].createElement(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: onRefresh }), onEndReached: handleLoadMore, onEndReachedThreshold: 0.5, initialNumToRender: pageSize, maxToRenderPerBatch: pageSize, windowSize: 11, removeClippedSubviews: true }))));
};
exports["default"] = MySurveyList;
