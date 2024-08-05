import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';

type SurveyFUA = {
  noPengajuanSurvey: string;
  unitNo: string;
};

const SurveyFUA = React.memo(({noPengajuanSurvey, unitNo}: SurveyFUA) => {
  const [noPengajuan, setNoPengajuan] = useState<string>(noPengajuanSurvey);
  const [contactDate, setContactDate] = useState<Date | undefined>(undefined);
  const [isOpenContactDate, setIsOpenContactDate] = useState<boolean>(false);
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>(undefined);
  const [isOpenAppointmentDate, setIsOpenAppointmentDate] = useState<boolean>(false);

  const toggleContactDate = () => {
    setIsOpenContactDate(!isOpenContactDate);
  };

  const onChangeContactDate = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setContactDate(selectedDate);
    }
    setIsOpenContactDate(!isOpenContactDate);
  };

  const toggleAppointmentDate = () => {
    setIsOpenAppointmentDate(!isOpenAppointmentDate);
  };

  const onChangeAppointmentDate = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setAppointmentDate(selectedDate);
    }
    setIsOpenAppointmentDate(!isOpenAppointmentDate);
  };

  const formatDateString = (date?: Date): string => {
    if (!date) return '';

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);

    return `${day}-${month}-${year}`;
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
          {isOpenContactDate && (
            <DateTimePicker
              mode="date"
              onChange={onChangeContactDate}
              value={contactDate ?? new Date()}
            />
          )}
          <TouchableOpacity
            onPress={toggleContactDate}
            className="flex-1"
          >
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
          {isOpenAppointmentDate && (
            <DateTimePicker
              mode="date"
              onChange={onChangeAppointmentDate}
              value={appointmentDate ?? new Date()}
            />
          )}
          <TouchableOpacity
            onPress={toggleAppointmentDate}
            className="flex-1"
          >
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
          <TextInput
            value={noPengajuan}
            onChangeText={setNoPengajuan}
            className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
            {/* {specificJob?.nama ?? 'Null'} */}
          </TextInput>
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
