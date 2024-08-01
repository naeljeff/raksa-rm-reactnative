import {Text, View} from 'react-native';
import React, {useState} from 'react';

import SearchBarHistory from '../SearchBar/SearchBarHistory';

const History = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  return (
    <View className="w-full h-full flex flex-col">
      <SearchBarHistory
        setSearchTerm={setSearchTerm}
        setSearchByTerm={setSearchByTerm}
        searchTab="History"
      />
      <Text>History</Text>
    </View>
  );
};

export default History;
