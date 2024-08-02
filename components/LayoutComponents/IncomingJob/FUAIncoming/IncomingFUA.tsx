import {Text, View} from 'react-native';
import React from 'react';

const IncomingFUA = () => {
  return (
    <View className="w-full flex flex-col items-start justify-center mb-4">
      <Text className="text-lg text-black font-bold px-3">
        Follow Up Activity
      </Text>
      <View className="w-full border-b border-black mb-2" />

      {/* Follow Up Activity Form */}
      <View className="w-full flex flex-col justify-center items-start space-y-2 px-3">
        {/* Contact Date */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Contact Date</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
            ABC123
          </Text>
        </View>

        {/* Appointment Date */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Appointment Date</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
            ABC123
          </Text>
        </View>

        {/* Address */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Address</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
            ABC123
          </Text>
        </View>

        {/* Status */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Status</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
            ABC123
          </Text>
        </View>

        {/* Remarks */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Remarks</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
            ABC123
          </Text>
        </View>
      </View>
    </View>
  );
};

export default IncomingFUA;
