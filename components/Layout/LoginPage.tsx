import {View} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';
import LoginHeader from '../Login/LoginHeader';
import LoginForm from '../Login/LoginForm';

type LoginPageProps = NativeStackScreenProps<RootStackParamList, 'login'>;

const LoginPage = ({navigation}: LoginPageProps) => {
  return (
    <View className="h-full w-full flex flex-col justify-center items-center bg-[#ffffea]">
      <LoginHeader />
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginPage;
