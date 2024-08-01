import {Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import React from 'react';

import {RootStackParamList} from '../../App';
import HeaderIncomingFUA from '../LayoutComponents/IncomingJob/FUAIncoming/HeaderIncomingFUA';
import IncomingAppointment from '../LayoutComponents/IncomingJob/FUAIncoming/IncomingAppointment';
import IncomingPersonalContact from '../LayoutComponents/IncomingJob/FUAIncoming/IncomingPersonalContact';
import { calcAgingDate } from '../../utilities/function';

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
    <View className="w-full h-full flex flex-col bg-[#ffffea]">
      {/* Header */}
      <HeaderIncomingFUA />

      {/* Appointment Schedule */}
      <IncomingAppointment
        noPengajuanSurvey={item.noPengajuanSurvey}
        unitNo={item.unitNo}
        createdAt={item.createdAt}
        emailRequest={item.emailRequest}
        aging={calcAgingDate(item.createdAt)}
        priority={item.priority}
      />

      {/* Personal Contact Schedule */}
      <IncomingPersonalContact
        nama={item.nama}
        alamat={item.alamat}
        noTelp={item.noTelp}
        email={item.email}
        catatan={item.catatan}
      />
    </View>
  );
};

export default MainFUAPage;
