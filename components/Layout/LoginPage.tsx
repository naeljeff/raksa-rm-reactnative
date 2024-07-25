import {View} from 'react-native';
import React from 'react';
import LoginHeader from '../Login/LoginHeader';
import LoginForm from '../Login/LoginForm';

const LoginPage = () => {

  return (
    <View className='h-full w-full flex flex-col justify-center items-center bg-[#ffffea]'>
      <LoginHeader />
      <LoginForm />
    </View>
  );
};

export default LoginPage;
