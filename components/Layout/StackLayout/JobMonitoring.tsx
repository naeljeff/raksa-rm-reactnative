import {Text, View} from 'react-native';
import React from 'react';
import SearchBarInput from '../../LayoutComponents/SearchBar/SearchBarInput';
import Information from '../../LayoutComponents/Information';

const JobMonitoring = () => {
  return (
    <View className="w-full h-full flex flex-col">
      <SearchBarInput />

      {/* Information */}
      <Information />
      <Text>JobMonitoring</Text>
    </View>
  );
};

export default JobMonitoring;
