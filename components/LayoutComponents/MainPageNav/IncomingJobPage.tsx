import {View, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  fetchData,
  selectData,
  selectRefreshing,
  startRefreshing,
  stopRefreshing,
} from '../../../store/slices/surveySlice';
import {AppDispatch} from '../../../store';

import SearchBarInput from '../SearchBar/SearchBarInput';
import Information from '../Information';
import JobList from '../IncomingJob/JobList';
import {RootStackParamList} from '../../../App';

const IncomingJobPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(selectData);
  const refreshing = useSelector(selectRefreshing);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'mainPage'>>();

  // console.log(searchTerm);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(startRefreshing());
    dispatch(fetchData()).finally(() => {
      dispatch(stopRefreshing());
    });
  };

  return (
    <View className="flex flex-1 flex-col">
      <SearchBarInput
        setSearchTerm={setSearchTerm}
        searchTab="IncomingJob"
        setSearchByTerm={setSearchByTerm}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      />

      {/* Information */}
      <Information />

      {refreshing && data.length === 0 ? (
        <View className="w-full flex-1 bg-[#f7ebd7] inset-0 justify-center items-center">
          <ActivityIndicator size="large" color="#f5af46" />
        </View>
      ) : (
        <JobList
          data={data}
          search={searchTerm}
          searchByTerm={searchByTerm}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          navigation={navigation}
          sortBy={sortBy}
          orderBy={orderBy}
        />
      )}
    </View>
  );
};

export default IncomingJobPage;
