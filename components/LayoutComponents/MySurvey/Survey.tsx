import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Badge} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../App';
import {JobProps} from '../../../props/JobProps';
import {calcAgingDate, formatDate} from '../../../utilities/function';

interface MySurveyPageProps {
  item: JobProps;
  index: number;
  navigation: NativeStackNavigationProp<RootStackParamList, 'mainPage'>;
}

const Survey = React.memo(({item, index, navigation}: MySurveyPageProps) => {
  const dayDiff = calcAgingDate(item.createdAt);
  const formattedDate = formatDate(item.createdAt);

  const handleListPress = () => {
    console.log(`Index: ${index} | Item: ${item.noPengajuanSurvey}`);
    navigation.navigate('formFUAIncoming', {
      item: item,
    });
  };

  return (
    <View className="w-screen py-0.5 px-1 border-b border-black">
      <TouchableOpacity
        onPress={handleListPress}
        className="w-screen flex flex-row justify-start items-center">
        {/* Icon Mail */}
        <View className="flex-[0.1] flex items-center justify-center ">
          <Icon name="mail" size={24} color="black" />
          <Badge className="absolute bg-red-500 left-1 top-3.5" size={16}>
            !
          </Badge>
        </View>

        {/* Informasi kendaraan */}
        <View className="flex-[0.55] flex-col gap-y-1">
          <Text className="font-bold text-black uppercase">
            {item.noPengajuanSurvey}/{item.unitNo}
          </Text>
          <Text className="text-black uppercase">
            {item.merek} - {item.tipe} - {item.model} | {item.platNomor}
          </Text>
          <Text className="text-black uppercase">{item.noTelp}</Text>
          <Text className="text-black uppercase">{`${
            item.jenisAsuransi
          } + ${item.perluasan.join('; ')}`}</Text>
          <Text className="text-black uppercase">{item.alamat}</Text>
        </View>

        {/* Due Date */}
        <View className="flex-[0.2] flex-col space-y-1">
          <Text className="text-black">{dayDiff} Days</Text>
          <Text className="text-black">{formattedDate}</Text>
        </View>

        {/* Status */}
        <View className="flex-[0.2] flex-col justify-center items-center pr-1.5">
          <Text className="text-sm text-black capitalize mb-2">{item.status}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
});

export default Survey;
