'use strict';
exports.__esModule = true;
var react_native_1 = require('react-native');
var react_1 = require('react');
var HeaderIncomingFUA_1 = require('../LayoutComponents/IncomingJob/FUAIncoming/HeaderIncomingFUA');
var IncomingAppointment_1 = require('../LayoutComponents/IncomingJob/FUAIncoming/IncomingAppointment');
var IncomingPersonalContact_1 = require('../LayoutComponents/IncomingJob/FUAIncoming/IncomingPersonalContact');
var IncomingCoorporateContact_1 = require('../LayoutComponents/IncomingJob/FUAIncoming/IncomingCoorporateContact');
var IncomingFUA_1 = require('../LayoutComponents/IncomingJob/FUAIncoming/IncomingFUA');
var function_1 = require('../../utilities/function');
var MainFUAPage = function (_a) {
  var route = _a.route;
  var item = route.params.item;
  return react_1['default'].createElement(
    react_native_1.View,
    {className: 'w-full h-full flex flex-col bg-[#f7ebd7]'},
    react_1['default'].createElement(HeaderIncomingFUA_1['default'], null),
    react_1['default'].createElement(
      react_native_1.ScrollView,
      {automaticallyAdjustKeyboardInsets: true},
      react_1['default'].createElement(IncomingAppointment_1['default'], {
        noPengajuanSurvey: item.noPengajuanSurvey,
        unitNo: item.unitNo,
        createdAt: item.createdAt,
        emailRequest: item.emailRequest,
        aging: function_1.calcAgingDate(item.createdAt),
        priority: item.priority,
      }),
      react_1['default'].createElement(IncomingPersonalContact_1['default'], {
        nama: item.nama,
        alamat: item.alamat,
        noTelp: item.noTelp,
        email: item.email,
        catatan: item.catatan,
      }),
      react_1['default'].createElement(
        IncomingCoorporateContact_1['default'],
        null,
      ),
      react_1['default'].createElement(IncomingFUA_1['default'], null),
    ),
  );
};
exports['default'] = MainFUAPage;
