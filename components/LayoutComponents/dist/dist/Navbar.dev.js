'use strict';

exports.__esModule = true;

var react_native_1 = require('react-native');

var react_native_paper_1 = require('react-native-paper');

var react_1 = require('react');

var react_native_linear_gradient_1 = require('react-native-linear-gradient');

var react_redux_1 = require('react-redux');

var surveySlice_1 = require('../../store/slices/surveySlice');

var Navbar = function Navbar(_a) {
  var onMenuChange = _a.onMenuChange;
  var menu = ['Incoming Job', 'Job Monitoring', 'My Survey', 'History'];

  var _b = react_1.useState(0),
      index = _b[0],
      setIndex = _b[1];

  var handleMenuPress = function handleMenuPress(option, idx) {
    setIndex(idx);
    onMenuChange(option);
  };

  var dataCount = react_redux_1.useSelector(function (state) {
    return surveySlice_1.getDataCount(state);
  });
  return react_1['default'].createElement(react_native_1.View, {
    className: 'w-full h-[50px]'
  }, react_1['default'].createElement(react_native_linear_gradient_1['default'], {
    colors: ['#fff', '#f5af46', '#f5af46', '#f5af46', '#ffa008'],
    className: 'h-full flex justify-center'
  }, react_1['default'].createElement(react_native_1.View, {
    className: 'w-full flex flex-row justify-center gap-x-2'
  }, menu.map(function (item, idx) {
    return react_1['default'].createElement(react_native_1.View, {
      key: idx,
      className: 'flex flex-row items-center justify-center'
    }, react_1['default'].createElement(react_native_1.Pressable, {
      onPress: function onPress() {
        return handleMenuPress(item, idx);
      },
      className: 'mr-2 ' + (index === idx ? 'bg-[#585454] py-1.5 px-1 rounded' : '')
    }, react_1['default'].createElement(react_native_1.Text, {
      className: 'relative text-sm text-black ' + (index === idx ? 'text-white' : 'text-black')
    }, item), idx === 0 && react_1['default'].createElement(react_native_paper_1.Badge, {
      size: 16,
      className: 'absolute bg-red-500 ' + (index === 0 ? 'top-[-3px] right-[-5px]' : 'top-[-7px] right-[-8px]')
    }, dataCount > 99 ? '99+' : dataCount)), idx === menu.length - 1 ? '' : react_1['default'].createElement(react_native_1.View, {
      className: 'h-full flex justify-center items-center border-r border-black'
    }));
  }))));
};

exports['default'] = Navbar;