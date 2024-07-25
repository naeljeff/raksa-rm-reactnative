import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {RootStackParamList} from '../../App';

type MainPageProps = NativeStackScreenProps<RootStackParamList, 'mainPage'>;

const MainPage = ({route}: MainPageProps) => {
  const {username, password} = route.params;
  return (
    <View>
      <Text>Username: {username}</Text>
      <Text>Password: {password}</Text>
    </View>
  );
};

export default MainPage;
