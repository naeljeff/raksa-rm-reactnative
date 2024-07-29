import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import React from 'react';

import {Provider} from 'react-redux';
import store from './store';

import LoginPage from './components/Layout/LoginPage';
import MainPage from './components/Layout/MainPage';

export type RootStackParamList = {
  login: undefined;
  mainPage: {username: string; password: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}>
            <Stack.Screen name="login" component={LoginPage} />
            <Stack.Screen name="mainPage" component={MainPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
