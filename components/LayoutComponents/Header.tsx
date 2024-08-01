import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Surface} from 'react-native-paper';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {
  fetchData,
  startRefreshing,
  stopRefreshing,
} from '../../store/slices/surveySlice';
import {logout} from '../../store/slices/userSlice';
import {AppDispatch} from '../../store';
import {
  fetchProcessedData,
  startRefreshingProcessedSurvey,
  stopRefreshingProcessedSurvey,
} from '../../store/slices/processedSurveySlice';

const Header = ({menuOption}: {menuOption: string}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'login'}],
      }),
    );
    Toast.show('Logout Berhasil!', Toast.LONG);
  };

  const handleRefresh = () => {
    switch (menuOption) {
      case 'Incoming Job':
        dispatch(startRefreshing());
        dispatch(fetchData()).finally(() => {
          dispatch(stopRefreshing());
        });
        break;
      case 'My Survey':
        dispatch(startRefreshingProcessedSurvey());
        dispatch(fetchProcessedData()).finally(() => {
          dispatch(stopRefreshingProcessedSurvey());
        });
        break;
      default:
        break;
    }
  };

  return (
    <View className="w-full h-[45px] px-5 flex flex-row justify-between items-center bg-[#ffbc3c] ">
      {/* Logout Button */}
      <Surface elevation={2} className="rounded-lg">
        <View className="py-1 px-2 bg-white rounded-lg">
          <TouchableOpacity
            className=" flex flex-row gap-x-2 "
            onPress={handleLogout}>
            <Icon name="log-out-outline" size={20} color="black" />
            <Text className="text-black">Logout</Text>
          </TouchableOpacity>
        </View>
      </Surface>

      {/* Text */}
      <Text className="text-lg text-black text-center font-semibold">RM</Text>

      {/* Refresh Button */}
      <Surface elevation={3} className="rounded-full">
        <TouchableOpacity
          className="w-7 h-7 flex justify-center items-center bg-white rounded-full"
          onPress={handleRefresh}>
          <Icon
            name="refresh"
            size={22}
            color="black"
            className="font-semibold"
          />
        </TouchableOpacity>
      </Surface>
    </View>
  );
};

export default Header;
