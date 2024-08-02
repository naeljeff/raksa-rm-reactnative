import {View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';

import SearchBarInput from '../SearchBar/SearchBarInput';
import Information from '../Information';
import MonitoringList from '../JobMonitoring/MonitoringList';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

const JobMonitoring = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'mainPage'>>();
  return (
    <View className="flex flex-1 flex-col">
      <SearchBarInput
        setSearchTerm={setSearchTerm}
        searchTab="JobMonitoring"
        setSearchByTerm={setSearchByTerm}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      />

      {/* Information */}
      <Information />

      {/* Monitoring List */}
      <MonitoringList
        search={searchTerm}
        searchByTerm={searchByTerm}
        navigation={navigation}
        sortBy={sortBy}
        orderBy={orderBy}
      />
    </View>
  );
};

export default JobMonitoring;
