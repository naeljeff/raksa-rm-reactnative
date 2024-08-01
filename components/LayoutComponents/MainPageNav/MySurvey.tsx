import {View, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';

import {
  fetchProcessedData,
  selectProcessedData,
  selectProcessedRefreshing,
  startRefreshingProcessedSurvey,
  stopRefreshingProcessedSurvey,
} from '../../../store/slices/processedSurveySlice';
import {AppDispatch} from '../../../store';

import SearchBarInput from '../SearchBar/SearchBarInput';
import Information from '../Information';
import {RootStackParamList} from '../../../App';
import MySurveyList from '../MySurvey/MySurveyList';

const MySurvey = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const processedData = useSelector(selectProcessedData);
  const processedRefreshing = useSelector(selectProcessedRefreshing);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'mainPage'>>();

  useEffect(() => {
    dispatch(fetchProcessedData());
  }, [dispatch]);

  const handleProcessedRefresh = () => {
    dispatch(startRefreshingProcessedSurvey());

    dispatch(fetchProcessedData()).finally(() => {
      dispatch(stopRefreshingProcessedSurvey());
    });
  };

  return (
    <View className="flex-1 flex flex-col">
      <SearchBarInput
        setSearchTerm={setSearchTerm}
        searchTab="MySurvey"
        setSearchByTerm={setSearchByTerm}
      />

      {/* Information */}
      <Information />

      {processedRefreshing && processedData.length === 0 ? (
        <View className="w-full flex-1 bg-[#ffffea] inset-0 justify-center items-center">
          <ActivityIndicator size="large" color="#ffbc3c" />
        </View>
      ) : (
        <MySurveyList
          data={processedData}
          search={searchTerm}
          searchByTerm={searchByTerm}
          refreshing={processedRefreshing}
          onRefresh={handleProcessedRefresh}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default MySurvey;
