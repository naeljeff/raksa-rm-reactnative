import {ScrollView, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import React from 'react';

import {RootStackParamList} from '../../App';
import HeaderIncomingFUA from '../LayoutComponents/IncomingJob/FUAIncoming/HeaderIncomingFUA';
import IncomingAppointment from '../LayoutComponents/IncomingJob/FUAIncoming/IncomingAppointment';
import IncomingPersonalContact from '../LayoutComponents/IncomingJob/FUAIncoming/IncomingPersonalContact';
import IncomingCoorporateContact from '../LayoutComponents/IncomingJob/FUAIncoming/IncomingCoorporateContact';
import IncomingFUA from '../LayoutComponents/IncomingJob/FUAIncoming/IncomingFUA';
import {calcAgingDate} from '../../utilities/function';

type MainFUANavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'formFUAIncoming'
>;
type MainFUARouteProp = RouteProp<RootStackParamList, 'formFUAIncoming'>;

type MainFUAPageProps = {
  navigation: MainFUANavigationProp;
  route: MainFUARouteProp;
};

const MainFUAPage = ({route}: MainFUAPageProps) => {
  const {item} = route.params;

  return (
    <View className="w-full h-full flex flex-col bg-[#f7ebd7]">
      {/* Header */}
      <HeaderIncomingFUA />

      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Appointment Schedule */}
        <IncomingAppointment
          noPengajuanSurvey={item.noPengajuanSurvey}
          unitNo={item.unitNo}
        />

        {/* Personal Contact Schedule */}
        <IncomingPersonalContact
          noPengajuanSurvey={item.noPengajuanSurvey}
          unitNo={item.unitNo}
        />

        {/* Coorporate Contact Person */}
        <IncomingCoorporateContact />

        {/* Follow Up Activity */}
        <IncomingFUA />
      </ScrollView>
    </View>
  );
};

export default MainFUAPage;
