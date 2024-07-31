import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import React from 'react';

import {Provider} from 'react-redux';
import store from './store';

import LoginPage from './components/Layout/LoginPage';
import MainPage from './components/Layout/MainPage';
import MainFUAPage from './components/Layout/MainFUAPage';

export type RootStackParamList = {
  login: undefined;
  mainPage: undefined;
  formFUAIncoming: {surveyId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="login">
            <Stack.Screen
              name="login"
              component={LoginPage}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="mainPage"
              component={MainPage}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen name="formFUAIncoming" component={MainFUAPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
