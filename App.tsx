import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import React from 'react';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Warning: TextInput.Icon: Support for defaultProps will be removed from function components in a future major release.',
]);

import {Provider} from 'react-redux';
import store from './store';

import LoginPage from './components/Layout/LoginPage';
import MainPage from './components/Layout/MainPage';
import MainFUAPage from './components/Layout/MainFUAPage';
import {JobProps} from './props/JobProps';
import MySurveyFUAPage from './components/Layout/MySurveyFUAPage';

export type RootStackParamList = {
  login: undefined;
  mainPage: undefined;
  formFUAIncoming: {item: JobProps};
  formFUAMySurvey: {item: JobProps};
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
            }}>
            <Stack.Screen
              name="login"
              component={LoginPage}
              options={{
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="mainPage"
              component={MainPage}
              options={{
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="formFUAIncoming"
              component={MainFUAPage}
              options={{
                gestureEnabled: true,
              }}
            />
            <Stack.Screen
              name="formFUAMySurvey"
              component={MySurveyFUAPage}
              options={{
                gestureEnabled: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
