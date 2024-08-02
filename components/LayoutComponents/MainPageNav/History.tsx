import {Text, View} from 'react-native';
import React, {useState} from 'react';

import SearchBarHistory from '../SearchBar/SearchBarHistory';
import HistoryList from '../History/HistoryList';
import Information from '../Information';

const History = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  return (
    <View className="w-full flex-1 flex flex-col">
      <SearchBarHistory
        setSearchTerm={setSearchTerm}
        setSearchByTerm={setSearchByTerm}
        searchTab="History"
      />

      <Information />

      {/* History */}
      {/* <HistoryList /> */}
    </View>
  );
};

export default History;
