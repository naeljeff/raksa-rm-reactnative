import {Text, View} from 'react-native';
import React from 'react';

import {formatDate} from '../../../../utilities/function';

type IncomingAppointment = {
  noPengajuanSurvey: string;
  unitNo: string;
  createdAt: string;
  aging: number;
};

const IncomingAppointment = ({
  noPengajuanSurvey,
  unitNo,
  createdAt,
  aging,
}: IncomingAppointment) => {
  return (
    <View className="w-full flex flex-col items-start justify-center mb-2">
      <Text className="text-lg text-black font-bold px-3 py-1.5">
        Appointment Schedule
      </Text>
      <View className="w-full border-b border-black mb-2" />

      {/* Appointment Schedule Form */}
      <View className="w-full flex flex-col justify-center items-start space-y-2 px-3">
        {/* No Pengajuan */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Register No</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-200 bg-gray-100 rounded">
            {noPengajuanSurvey}
          </Text>
        </View>

        {/* Unit No */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Unit No</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-200 bg-gray-100 rounded">
            {unitNo}
          </Text>
        </View>

        {/* Requested By */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Requested By</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-200 bg-gray-100 rounded">
            Email
          </Text>
        </View>

        {/* Requested Date */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Requested Date</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-200 bg-gray-100 rounded">
            {formatDate(createdAt)}
          </Text>
        </View>

        {/* Aging */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Aging</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-200 bg-gray-100 rounded">
            {aging}
          </Text>
        </View>

        {/* Priority */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Priority</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-200 bg-gray-100 rounded">
            High
          </Text>
        </View>
      </View>
    </View>
  );
};

export default IncomingAppointment;
