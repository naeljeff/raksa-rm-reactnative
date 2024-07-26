import {Text, View} from 'react-native';
import React from 'react';
import SearchBarInput from '../../LayoutComponents/SearchBarInput';

const JobMonitoring = () => {
  return (
    <View className="w-full h-full flex flex-col">
      <SearchBarInput />
      <Text>JobMonitoring</Text>
    </View>
  );
};

export default JobMonitoring;
