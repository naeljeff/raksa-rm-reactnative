import {Text, View} from 'react-native';
import React from 'react';

const StatusBar = () => {
  const currDate: Date = new Date();

  // Date and Time
  const formattedDate = `${String(currDate.getDate()).padStart(2, '0')}-${currDate.toLocaleString('en-US', { month: 'short' })}-${String(currDate.getFullYear()).slice(-2)}`;
  const timeFormatter: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }
  const formattedTime = currDate.toLocaleTimeString('en-US', timeFormatter);
  return (
    <View className="w-full h-[50px] px-2 flex flex-row justify-between items-center bg-[#585454]">
      <Text className='text-xs text-white'>Welcome, Isti Marlisa</Text>
      <Text className='text-xs text-white'>Last update: {formattedDate} {formattedTime}</Text>
    </View>
  );
};

export default StatusBar;
