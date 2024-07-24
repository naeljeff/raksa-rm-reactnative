// import { enableScreens } from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import React from 'react';
import LoginPage from './components/Pages/LoginPage';
import IncomingJobPage from './components/Pages/IncomingJobPage';

// enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen name="incomingJob" component={IncomingJobPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
