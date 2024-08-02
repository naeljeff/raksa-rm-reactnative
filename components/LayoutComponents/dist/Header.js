'use strict';
exports.__esModule = true;
var react_native_1 = require('react-native');
var Ionicons_1 = require('react-native-vector-icons/Ionicons');
var react_native_paper_1 = require('react-native-paper');
var native_1 = require('@react-navigation/native');
var react_native_simple_toast_1 = require('react-native-simple-toast');
var react_1 = require('react');
var react_redux_1 = require('react-redux');
var surveySlice_1 = require('../../store/slices/surveySlice');
var userSlice_1 = require('../../store/slices/userSlice');
var processedSurveySlice_1 = require('../../store/slices/processedSurveySlice');
var Header = function (_a) {
  var menuOption = _a.menuOption;
  var navigation = native_1.useNavigation();
  var dispatch = react_redux_1.useDispatch();
  var handleLogout = function () {
    dispatch(userSlice_1.logout());
    navigation.dispatch(
      native_1.CommonActions.reset({
        index: 0,
        routes: [{name: 'login'}],
      }),
    );
    react_native_simple_toast_1['default'].show(
      'Logout Berhasil!',
      react_native_simple_toast_1['default'].LONG,
    );
  };
  var handleRefresh = function () {
    switch (menuOption) {
      case 'Incoming Job':
        dispatch(surveySlice_1.startRefreshing());
        dispatch(surveySlice_1.fetchData())['finally'](function () {
          dispatch(surveySlice_1.stopRefreshing());
        });
        break;
      case 'My Survey':
        dispatch(processedSurveySlice_1.startRefreshingProcessedSurvey());
        dispatch(processedSurveySlice_1.fetchProcessedData())['finally'](
          function () {
            dispatch(processedSurveySlice_1.stopRefreshingProcessedSurvey());
          },
        );
        break;
      default:
        break;
    }
  };
  return react_1['default'].createElement(
    react_native_1.View,
    {
      className:
        'w-full h-[45px] px-5 flex flex-row justify-between items-center bg-[#f5af46] ',
    },
    react_1['default'].createElement(
      react_native_paper_1.Surface,
      {elevation: 2, className: 'rounded-lg'},
      react_1['default'].createElement(
        react_native_1.View,
        {className: 'py-1 px-2 bg-white rounded-lg'},
        react_1['default'].createElement(
          react_native_1.TouchableOpacity,
          {className: ' flex flex-row gap-x-2 ', onPress: handleLogout},
          react_1['default'].createElement(Ionicons_1['default'], {
            name: 'log-out-outline',
            size: 20,
            color: 'black',
          }),
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black'},
            'Logout',
          ),
        ),
      ),
    ),
    react_1['default'].createElement(
      react_native_1.Text,
      {className: 'text-lg text-black text-center font-semibold'},
      'RM',
    ),
    react_1['default'].createElement(
      react_native_paper_1.Surface,
      {elevation: 3, className: 'rounded-full'},
      react_1['default'].createElement(
        react_native_1.TouchableOpacity,
        {
          className:
            'w-7 h-7 flex justify-center items-center bg-white rounded-full',
          onPress: handleRefresh,
        },
        react_1['default'].createElement(Ionicons_1['default'], {
          name: 'refresh',
          size: 22,
          color: 'black',
          className: 'font-semibold',
        }),
      ),
    ),
  );
};
exports['default'] = Header;
