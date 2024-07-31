import {Text, View} from 'react-native';
import React, {useState} from 'react';

import SearchBarInput from '../SearchBar/SearchBarInput';
import Information from '../Information';

const MySurvey = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  return (
    <View className="w-full h-full flex flex-col">
      <SearchBarInput
        setSearchTerm={setSearchTerm}
        searchTab="MySurvey"
        setSearchByTerm={setSearchByTerm}
      />

      {/* Information */}
      <Information />
      <Text>MySurvey</Text>
    </View>
  );
};

export default MySurvey;
