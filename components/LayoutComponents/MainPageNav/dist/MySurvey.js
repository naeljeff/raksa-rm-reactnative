"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var processedSurveySlice_1 = require("../../../store/slices/processedSurveySlice");
var SearchBarInput_1 = require("../SearchBar/SearchBarInput");
var Information_1 = require("../Information");
var MySurveyList_1 = require("../MySurvey/MySurveyList");
var MySurvey = function () {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState(''), searchByTerm = _b[0], setSearchByTerm = _b[1];
    var _c = react_1.useState(''), sortBy = _c[0], setSortBy = _c[1];
    var _d = react_1.useState(''), orderBy = _d[0], setOrderBy = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var processedData = react_redux_1.useSelector(processedSurveySlice_1.selectProcessedData);
    var processedRefreshing = react_redux_1.useSelector(processedSurveySlice_1.selectProcessedRefreshing);
    var navigation = native_1.useNavigation();
    react_1.useEffect(function () {
        dispatch(processedSurveySlice_1.fetchProcessedData());
    }, [dispatch]);
    var handleProcessedRefresh = function () {
        dispatch(processedSurveySlice_1.startRefreshingProcessedSurvey());
        dispatch(processedSurveySlice_1.fetchProcessedData())["finally"](function () {
            dispatch(processedSurveySlice_1.stopRefreshingProcessedSurvey());
        });
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex flex-col" },
        react_1["default"].createElement(SearchBarInput_1["default"], { setSearchTerm: setSearchTerm, searchTab: "MySurvey", setSearchByTerm: setSearchByTerm, setSortBy: setSortBy, setOrderBy: setOrderBy }),
        react_1["default"].createElement(Information_1["default"], null),
        processedRefreshing && processedData.length === 0 ? (react_1["default"].createElement(react_native_1.View, { className: "w-full flex-1 bg-[#f7ebd7] inset-0 justify-center items-center" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#f5af46" }))) : (react_1["default"].createElement(MySurveyList_1["default"], { data: processedData, search: searchTerm, searchByTerm: searchByTerm, refreshing: processedRefreshing, onRefresh: handleProcessedRefresh, navigation: navigation, sortBy: sortBy, orderBy: orderBy }))));
};
exports["default"] = MySurvey;
