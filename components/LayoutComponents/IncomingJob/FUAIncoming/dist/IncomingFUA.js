'use strict';
exports.__esModule = true;
var react_native_1 = require('react-native');
var react_1 = require('react');
var IncomingFUA = function () {
  return react_1['default'].createElement(
    react_native_1.View,
    {className: 'w-full flex flex-col items-start justify-center mb-4'},
    react_1['default'].createElement(
      react_native_1.Text,
      {className: 'text-lg text-black font-bold px-3'},
      'Follow Up Activity',
    ),
    react_1['default'].createElement(react_native_1.View, {
      className: 'w-full border-b border-black mb-2',
    }),
    react_1['default'].createElement(
      react_native_1.View,
      {
        className:
          'w-full flex flex-col justify-center items-start space-y-2 px-3',
      },
      react_1['default'].createElement(
        react_native_1.View,
        {
          className:
            'w-full flex flex-row items-center justify-between space-x-2',
        },
        react_1['default'].createElement(
          react_native_1.View,
          {className: 'w-[30%] flex flex-row justify-between items-center'},
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            'Contact Date',
          ),
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            ':',
          ),
        ),
        react_1['default'].createElement(
          react_native_1.Text,
          {
            className:
              'flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded',
          },
          'ABC123',
        ),
      ),
      react_1['default'].createElement(
        react_native_1.View,
        {
          className:
            'w-full flex flex-row items-center justify-between space-x-2',
        },
        react_1['default'].createElement(
          react_native_1.View,
          {className: 'w-[30%] flex flex-row justify-between items-center'},
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            'Appointment Date',
          ),
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            ':',
          ),
        ),
        react_1['default'].createElement(
          react_native_1.Text,
          {
            className:
              'flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded',
          },
          'ABC123',
        ),
      ),
      react_1['default'].createElement(
        react_native_1.View,
        {
          className:
            'w-full flex flex-row items-center justify-between space-x-2',
        },
        react_1['default'].createElement(
          react_native_1.View,
          {className: 'w-[30%] flex flex-row justify-between items-center'},
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            'Address',
          ),
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            ':',
          ),
        ),
        react_1['default'].createElement(
          react_native_1.Text,
          {
            className:
              'flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded',
          },
          'ABC123',
        ),
      ),
      react_1['default'].createElement(
        react_native_1.View,
        {
          className:
            'w-full flex flex-row items-center justify-between space-x-2',
        },
        react_1['default'].createElement(
          react_native_1.View,
          {className: 'w-[30%] flex flex-row justify-between items-center'},
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            'Status',
          ),
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            ':',
          ),
        ),
        react_1['default'].createElement(
          react_native_1.Text,
          {
            className:
              'flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded',
          },
          'ABC123',
        ),
      ),
      react_1['default'].createElement(
        react_native_1.View,
        {
          className:
            'w-full flex flex-row items-center justify-between space-x-2',
        },
        react_1['default'].createElement(
          react_native_1.View,
          {className: 'w-[30%] flex flex-row justify-between items-center'},
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            'Remarks',
          ),
          react_1['default'].createElement(
            react_native_1.Text,
            {className: 'text-black capitalize'},
            ':',
          ),
        ),
        react_1['default'].createElement(
          react_native_1.Text,
          {
            className:
              'flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded',
          },
          'ABC123',
        ),
      ),
    ),
  );
};
exports['default'] = IncomingFUA;
