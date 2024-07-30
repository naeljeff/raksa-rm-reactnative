import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { selectUserData, selectUserLoggedIn } from '../../store/slices/userSlice';

const StatusBar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  const user = useSelector(selectUserData);
  const loggedIn = useSelector(selectUserLoggedIn);

  // Date and Time
  const formattedDate = `${String(currentDate.getDate()).padStart(
    2,
    '0'
  )}-${currentDate.toLocaleString('en-US', { month: 'short' })}-${String(
    currentDate.getFullYear()
  ).slice(-2)}`;

  const timeFormatter: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Jakarta',
  };

  const formattedTime = currentDate.toLocaleTimeString('en-US', timeFormatter);

  return (
    <View className="w-full h-[50px] px-2 flex flex-row justify-between items-center bg-[#585454]">
      {loggedIn && (
        <Text className="text-xs text-white">{`Welcome, ${user.fullName}`}</Text>
      )}
      <Text className="text-xs text-white">
        Last update: {formattedDate} {formattedTime}
      </Text>
    </View>
  );
};

export default StatusBar;
