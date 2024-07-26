import {Text, View} from 'react-native';
import React from 'react';
import SearchBarInput from '../../LayoutComponents/SearchBarInput';

const MySurvey = () => {
  return (
    <View className="w-full h-full flex flex-col">
      <SearchBarInput />
      <Text>MySurvey</Text>
    </View>
  );
};

export default MySurvey;
