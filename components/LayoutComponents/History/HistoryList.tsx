import {Text, View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const HistoryList = () => {
  return (
    <View className="flex-1 w-full bg-[#ffffea]">
      <View className="w-full h-full flex flex-col justify-center items-center">
        <MIcon name="do-not-disturb-alt" size={80} color="black" />
        <Text className="italic text-gray-600 capitalize text-xl">
          No History Found
        </Text>
      </View>
    </View>
  );
};

export default HistoryList;
