import {Text, View} from 'react-native';
import React, { useState } from 'react';
import SearchBarInput from '../../LayoutComponents/SearchBar/SearchBarInput';
import Information from '../../LayoutComponents/Information';

const JobMonitoring = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <View className="w-full h-full flex flex-col">
      <SearchBarInput setSearchTerm={setSearchTerm} searchTab='JobMonitoring' />

      {/* Information */}
      <Information />
      <Text>JobMonitoring</Text>
    </View>
  );
};

export default JobMonitoring;
