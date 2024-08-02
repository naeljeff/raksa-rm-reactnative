import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {JobProps} from '../../../props/JobProps';
import {Badge, Surface} from 'react-native-paper';
import {calcAgingDate, formatDate} from '../../../utilities/function';
import { RootStackParamList } from '../../../App';

interface MonitoringSubListProps {
  item: JobProps;
  index: number;
  navigation: NativeStackNavigationProp<RootStackParamList, 'mainPage'>;
}

const MonitoringSubList = ({item, index, navigation}: MonitoringSubListProps) => {
  const dayDiff = calcAgingDate(item.createdAt);
  const formattedDate = formatDate(item.createdAt);

  const handleMonitoringSubListPress = () => {
    console.log(`Index: ${index} | Item: ${item.noPengajuanSurvey}`)
    navigation.navigate('formFUAIncoming', {
      item: item,
    });
  }
  return (
    <TouchableOpacity
      onPress={handleMonitoringSubListPress}
      className="w-screen flex flex-row justify-start items-center">
      {/* Icon Mail */}
      <View className="flex-[0.1] flex items-center justify-center ">
        <Icon name="mail" size={24} color="black" />
        <Badge className="absolute bg-red-500 left-1 top-3.5" size={16}>
          !
        </Badge>
      </View>

      {/* Informasi kendaraan */}
      <View className="flex-[0.5] flex-col gap-y-1">
        <Text className="font-bold text-black uppercase">
          {item.noPengajuanSurvey}/{item.unitNo}
        </Text>
        <Text className="text-xs text-black uppercase">
          {item.merek} - {item.tipe} - {item.model} | {item.platNomor}
        </Text>
        <Text className="text-xs text-black uppercase">{item.noTelp}</Text>
        <Text className="text-xs text-black uppercase">{`${
          item.jenisAsuransi
        } + ${item.perluasan.join('; ')}`}</Text>
        <Text className="text-xs text-black uppercase">{item.alamat}</Text>
      </View>

      {/* Due Date */}
      <View className="flex-[0.2] flex-col gap-y-1 -mr-5 ml-1">
        <Text className="text-xs text-black font-semibold uppercase mb-2">
          {item.status}
        </Text>
        <Text className="text-xs text-black">{dayDiff} Days</Text>
        <Text className="text-xs text-black">{formattedDate}</Text>
      </View>

      {/* Status */}
      <View className="flex-[0.2] flex-col justify-center items-center pr-1.5">
        {/* <JobListMenu item={item} /> */}
        <Surface
          className="justify-center items-center border bg-white border-black rounded px-2 py-0.5"
          elevation={2}>
          <TouchableOpacity
            onPress={() => console.log(`Pressed: ${item.nama}`)}>
            <Text className="text-xs text-black tracking-tighter">
              Reassign
            </Text>
          </TouchableOpacity>
        </Surface>
      </View>
    </TouchableOpacity>
  );
};

export default MonitoringSubList;
