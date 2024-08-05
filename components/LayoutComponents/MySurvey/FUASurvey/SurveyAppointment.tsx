import {Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

type SurveyAppointment = {
  noPengajuanSurvey: string;
  unitNo: string;
};

const SurveyAppointment = React.memo(
  ({noPengajuanSurvey, unitNo}: SurveyAppointment) => {
    const [noPengajuan, setNoPengajuan] = useState<string>(noPengajuanSurvey);
    return (
      <View className="w-full flex flex-col items-start justify-center mb-2">
        <Text className="text-lg text-black font-bold px-3 py-1.5">
          Appointment Schedule
        </Text>
        <View className="w-full border-b border-black mb-2" />

        {/* Appointment Schedule Form */}
        <View className="w-full flex flex-col justify-center items-start space-y-2 px-3">
          {/* No Pengajuan */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Register No</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {/* {specificJob?.noPengajuanSurvey ?? 'Null'} */}
            </TextInput>
          </View>

          {/* Unit No */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Unit No</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {/* {specificJob?.unitNo ?? 'Null'} */}
            </TextInput>
          </View>

          {/* Requested By */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Requested By</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {/* {specificJob?.emailRequest ?? 'Null'} */}
            </TextInput>
          </View>

          {/* Requested Date */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Requested Date</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {/* {specificJob?.createdAt ? formatDate(specificJob.createdAt) : 'Null'} */}
            </TextInput>
          </View>

          {/* Aging */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Aging</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {/* {specificJob?.createdAt ? calcAgingDate(specificJob.createdAt) : 'Null'} */}
            </TextInput>
          </View>

          {/* Priority */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Priority</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {/* {specificJob?.priority ?? 'Null'} */}
            </TextInput>
          </View>
        </View>
      </View>
    );
  },
);

export default SurveyAppointment;
