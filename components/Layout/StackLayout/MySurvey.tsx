import {Text, View} from 'react-native';
import React, { useState } from 'react';
import SearchBarInput from '../../LayoutComponents/SearchBar/SearchBarInput';
import Information from '../../LayoutComponents/Information';

const MySurvey = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <View className="w-full h-full flex flex-col">
      <SearchBarInput setSearchTerm={setSearchTerm} searchTab='MySurvey' />

      {/* Information */}
      <Information />
      <Text>MySurvey</Text>
    </View>
  );
};

export default MySurvey;
