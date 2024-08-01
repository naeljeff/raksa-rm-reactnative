import {View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';

import SearchBarInput from '../SearchBar/SearchBarInput';
import Information from '../Information';
import MonitoringList from '../JobMonitoring/MonitoringList';

const JobMonitoring = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  return (
    <View className="w-full h-full flex flex-col">
      <SearchBarInput
        setSearchTerm={setSearchTerm}
        searchTab="JobMonitoring"
        setSearchByTerm={setSearchByTerm}
      />

      {/* Information */}
      <Information />

      {/* Monitoring List */}
      <MonitoringList />
    </View>
  );
};

export default JobMonitoring;
