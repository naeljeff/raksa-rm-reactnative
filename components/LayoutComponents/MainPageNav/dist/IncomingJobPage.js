"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var surveySlice_1 = require("../../../store/slices/surveySlice");
var SearchBarInput_1 = require("../SearchBar/SearchBarInput");
var Information_1 = require("../Information");
var JobList_1 = require("../IncomingJob/JobList");
var IncomingJobPage = function () {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState(''), searchByTerm = _b[0], setSearchByTerm = _b[1];
    var _c = react_1.useState(''), sortBy = _c[0], setSortBy = _c[1];
    var _d = react_1.useState(''), orderBy = _d[0], setOrderBy = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var data = react_redux_1.useSelector(surveySlice_1.selectData);
    var refreshing = react_redux_1.useSelector(surveySlice_1.selectRefreshing);
    var navigation = native_1.useNavigation();
    // console.log(searchTerm);
    react_1.useEffect(function () {
        dispatch(surveySlice_1.fetchData());
    }, [dispatch]);
    var handleRefresh = function () {
        dispatch(surveySlice_1.startRefreshing());
        dispatch(surveySlice_1.fetchData())["finally"](function () {
            dispatch(surveySlice_1.stopRefreshing());
        });
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "flex flex-1 flex-col" },
        react_1["default"].createElement(SearchBarInput_1["default"], { setSearchTerm: setSearchTerm, searchTab: "IncomingJob", setSearchByTerm: setSearchByTerm, setSortBy: setSortBy, setOrderBy: setOrderBy }),
        react_1["default"].createElement(Information_1["default"], null),
        refreshing && data.length === 0 ? (react_1["default"].createElement(react_native_1.View, { className: "w-full flex-1 bg-[#f7ebd7] inset-0 justify-center items-center" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#f5af46" }))) : (react_1["default"].createElement(JobList_1["default"], { data: data, search: searchTerm, searchByTerm: searchByTerm, refreshing: refreshing, onRefresh: handleRefresh, navigation: navigation, sortBy: sortBy, orderBy: orderBy }))));
};
exports["default"] = IncomingJobPage;
