import {Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import React from 'react';

import {RootStackParamList} from '../../App';
import HeaderIncomingFUA from '../LayoutComponents/IncomingJob/FUAIncoming/HeaderIncomingFUA';
import IncomingFUA from '../LayoutComponents/IncomingJob/FUAIncoming/IncomingFUA';

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
    <View className="w-full h-full flex flex-col bg-[#ffffea]">
      {/* Header */}
      <HeaderIncomingFUA />

      {/* Form FUA Incoming */}
      <IncomingFUA />
      <Text>{`Survey ID: ${surveyId}`}</Text>
    </View>
  );
};

export default MainFUAPage;
