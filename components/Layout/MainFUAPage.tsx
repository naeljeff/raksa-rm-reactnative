import {Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import React from 'react';

import {RootStackParamList} from '../../App';

type MainFUANavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'formFUAIncoming'
>;
type MainFUARouteProp = RouteProp<RootStackParamList, 'formFUAIncoming'>;

type MainFUAPageProps = {
  navigation: MainFUANavigationProp;
  route: MainFUARouteProp;
};

const MainFUAPage = (props: MainFUAPageProps) => {
  const {surveyId} = props.route.params;
  return (
    <View>
      <Text>MainFUAPage</Text>
      <Text>{`Survey ID: ${surveyId}`}</Text>
    </View>
  );
};

export default MainFUAPage;
