import {ScrollView, View, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import React from 'react';

import {RootStackParamList} from '../../App';
import HeaderIncomingFUA from '../LayoutComponents/IncomingJob/FUAIncoming/HeaderIncomingFUA';
import SurveyAppointment from '../LayoutComponents/MySurvey/FUASurvey/SurveyAppointment';
import SurveyPersonalContact from '../LayoutComponents/MySurvey/FUASurvey/SurveyPersonalContact';
import SurveyCoorporateContact from '../LayoutComponents/MySurvey/FUASurvey/SurveyCoorporateContact';
import SurveyFUA from '../LayoutComponents/MySurvey/FUASurvey/SurveyFUA';

type MySurveyNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'formFUAMySurvey'
>;
type MySurveyRouteProp = RouteProp<RootStackParamList, 'formFUAMySurvey'>;

type MySurveyFUAProps = {
  navigation: MySurveyNavigationProps;
  route: MySurveyRouteProp;
};
//TODO: Nanti tambahin datetimepicker buat FUA
const MySurveyFUAPage = ({route}: MySurveyFUAProps) => {
  return (
    <View className="w-full h-full flex flex-col bg-[#f7ebd7]">
      {/* Header */}
      <HeaderIncomingFUA />

      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Appointment Schedule */}
        <SurveyAppointment noPengajuanSurvey={'asd'} unitNo={'asd'} />
        {/* <IncomingAppointment
          noPengajuanSurvey={item.noPengajuanSurvey}
          unitNo={item.unitNo}
        /> */}

        {/* Personal Contact Schedule */}
        <SurveyPersonalContact noPengajuanSurvey={'asd'} unitNo={'asd'} />
        {/* <IncomingPersonalContact
          noPengajuanSurvey={item.noPengajuanSurvey}
          unitNo={item.unitNo}
        /> */}

        {/* Coorporate Contact Person */}
        <SurveyCoorporateContact noPengajuanSurvey={'asd'} unitNo={'asd'} />
        {/* <IncomingCoorporateContact /> */}

        {/* Follow Up Activity */}
        <SurveyFUA noPengajuanSurvey={'asd'} unitNo={'asd'} />
        {/* <IncomingFUA /> */}

        {/* Buttons */}
      </ScrollView>
    </View>
  );
};

export default MySurveyFUAPage;
