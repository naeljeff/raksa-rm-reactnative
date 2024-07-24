import {Text, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  return ( 
    <View className='h-full w-full bg-black'>
      <Text className='text-white text-2xl'>asd</Text>
    </View>
  );
};

export default App;
