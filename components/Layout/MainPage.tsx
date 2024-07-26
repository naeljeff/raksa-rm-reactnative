import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {RootStackParamList} from '../../App';
import Header from '../LayoutComponents/Header';
import StatusBar from '../LayoutComponents/StatusBar';
import Navbar from '../LayoutComponents/Navbar';

type MainPageProps = NativeStackScreenProps<RootStackParamList, 'mainPage'>;

const MainPage = ({route}: MainPageProps) => {
  // const {username, password} = route.params;
  return (
    <View className='w-full h-full flex flex-col'>
      {/* Header */}
      <Header />

      {/* Status Bar */}
      <StatusBar />

      {/* Navbar */}
      <Navbar />
      
      {/* Content based on navbar */}
    </View>
  );
};

export default MainPage;
