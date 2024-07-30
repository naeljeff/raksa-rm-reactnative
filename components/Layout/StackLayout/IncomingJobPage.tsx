import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';

import {
  fetchData,
  startRefreshing,
  stopRefreshing,
} from '../../../store/slices/surveySlice';
import {RootState, AppDispatch} from '../../../store';

import SearchBarInput from '../../LayoutComponents/SearchBar/SearchBarInput';
import Information from '../../LayoutComponents/Information';
import JobList from '../../LayoutComponents/IncomingJob/JobList';

const IncomingJobPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.survey.data);
  const refreshing = useSelector((state: RootState) => state.survey.refreshing);

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
    <View className="w-full h-full flex flex-1 flex-col">
      <SearchBarInput setSearchTerm={setSearchTerm} searchTab='IncomingJob' setSearchByTerm={setSearchByTerm}/>

      {/* Information */}
      <Information />

      <JobList
        data={data}
        search={searchTerm}
        searchByTerm={searchByTerm}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default IncomingJobPage;
