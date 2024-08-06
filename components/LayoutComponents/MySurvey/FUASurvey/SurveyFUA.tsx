import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import React, {useState} from 'react';
import FAwesome from 'react-native-vector-icons/FontAwesome6';

import SurveyFUAStatus from './FUASurveyModal/SurveyFUAStatus';

type SurveyFUA = {
  noPengajuanSurvey: string;
  unitNo: string;
};

const SurveyFUA = React.memo(({noPengajuanSurvey, unitNo}: SurveyFUA) => {
  const [noPengajuan, setNoPengajuan] = useState<string>(noPengajuanSurvey);
  const [contactDate, setContactDate] = useState<Date | undefined>(undefined);
  const [isOpenContactDate, setIsOpenContactDate] = useState<boolean>(false);
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>(
    undefined,
  );
  const [isOpenAppointmentDate, setIsOpenAppointmentDate] =
    useState<boolean>(false);
  const [isStatusOpen, setIsStatusOpen] = useState<boolean>(false);
  const [FUAStatus, setFUAStatus] = useState<string>('ongoing');

  const onConfirmContactDate = (date?: Date) => {
    setIsOpenContactDate(false);
    setContactDate(date);
  };

  const closeContactDate = () => {
    setIsOpenContactDate(false);
  };

  const onConfirmAppointmentDate = (date?: Date) => {
    setIsOpenAppointmentDate(false);
    setAppointmentDate(date);
  };

  const closeAppointmentDate = () => {
    setIsOpenAppointmentDate(false);
  };

  const formatDateString = (date?: Date): string => {
    if (!date) return '';

    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', {month: 'short'});
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  return (
    <View className="w-full flex flex-col items-start justify-center mb-4">
      <Text className="text-lg text-black font-bold px-3">
        Follow Up Activity
      </Text>
      <View className="w-full border-b border-black mb-2" />

      {/* Follow Up Activity Form */}
      <View className="w-full flex flex-col justify-center items-start space-y-2 px-3">
        {/* Contact Date */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Contact Date</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <DatePicker
            modal
            open={isOpenContactDate}
            date={contactDate ?? new Date()}
            locale="en-GB"
            onConfirm={onConfirmContactDate}
            onCancel={closeContactDate}
          />
          <TouchableOpacity
            onPress={() => setIsOpenContactDate(true)}
            className="flex-1">
            <TextInput
              value={formatDateString(contactDate)}
              editable={false}
              placeholder="Select Contact Date"
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"
            />
          </TouchableOpacity>
        </View>

        {/* Appointment Date */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Appointment Date</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <DatePicker
            modal
            open={isOpenAppointmentDate}
            date={appointmentDate ?? new Date()}
            locale="en-GB"
            onConfirm={onConfirmAppointmentDate}
            onCancel={closeAppointmentDate}
          />
          <TouchableOpacity
            onPress={() => setIsOpenAppointmentDate(true)}
            className="flex-1">
            <TextInput
              value={formatDateString(appointmentDate)}
              editable={false}
              placeholder="Select Appointment Date"
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"
            />
          </TouchableOpacity>
        </View>

        {/* Address */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Address</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <TextInput
            value={noPengajuan}
            onChangeText={setNoPengajuan}
            multiline={true}
            className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
            {/* {specificJob?.nama ?? 'Null'} */}
          </TextInput>
        </View>

        {/* Status */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Status</Text>
            <Text className="text-black capitalize">:</Text>
          </View>

          <TouchableOpacity
            onPress={() => setIsStatusOpen(true)}
            className="relative flex-1 flex-row items-center border border-gray-300 bg-gray-100 rounded pr-3">
            <TextInput
              value={FUAStatus}
              editable={false}
              className="flex-1 text-black text-xs uppercase py-1 px-2"
            />
            <FAwesome
              name={isStatusOpen ? "chevron-up": "chevron-down"}
              size={16}
              color="black"
            />
          </TouchableOpacity>
          {isStatusOpen && <SurveyFUAStatus openFUAStatus={setIsStatusOpen} statusFUA={setFUAStatus}/>}
        </View>

        {/* Remarks */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Remarks</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <TextInput
            value={noPengajuan}
            onChangeText={setNoPengajuan}
            multiline={true}
            className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
            {/* {specificJob?.nama ?? 'Null'} */}
          </TextInput>
        </View>
      </View>
    </View>
  );
});

export default SurveyFUA;
