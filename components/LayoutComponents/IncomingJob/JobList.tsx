import {
  FlatList,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Badge} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../App';

type JobProps = {
  rowid: number;
  noPengajuanSurvey: string;
  unitNo: string;
  alamat: string;
  noTelp: string;
  email: string;
  createdAt: string;
  merek: string;
  tipe: string;
  model: string;
  jenisAsuransi: string;
  status: string;
  platNomor: string;
};

interface JobPageProps {
  item: JobProps;
  index: number;
  navigation: NativeStackNavigationProp<RootStackParamList, 'mainPage'>;
}

const Job = ({item, index, navigation}: JobPageProps) => {
  const itemDate = new Date(item.createdAt);
  const formattedDate = `${String(itemDate.getDate()).padStart(
    2,
    '0',
  )}-${itemDate.toLocaleString('en-US', {month: 'short'})}-${String(
    itemDate.getFullYear(),
  ).slice(-2)}`;

  const currDate = new Date();
  const dayDiff = Math.round(
    (currDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const handleListPress = () => {
    const surveyId = `${item.noPengajuanSurvey}/${item.unitNo}`;
    console.log(`Index: ${index} | Item: ${item.noPengajuanSurvey}`);
    navigation.navigate('formFUAIncoming', {
      surveyId: surveyId,
    });
  };
  return (
    <View className="w-screen py-0.5 px-1 gap-x-1 border-t border-black">
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
        <View className="flex-[0.6] flex-col gap-y-1">
          <Text className="font-bold text-black uppercase">
            {item.noPengajuanSurvey}/{item.unitNo}
          </Text>
          <Text className="text-black uppercase">
            {item.merek} - {item.tipe} - {item.model} | {item.platNomor}
          </Text>
          <Text className="text-black uppercase">{item.noTelp}</Text>
          <Text className="text-black uppercase">{item.jenisAsuransi}</Text>
          <Text className="text-black uppercase">{item.alamat}</Text>
        </View>

        {/* Due Date */}
        <View className="flex-[0.2] flex-col gap-y-1">
          <Text className="text-black">{dayDiff} Days</Text>
          <Text className="text-black">{formattedDate}</Text>
        </View>

        {/* Status */}
        <View className="flex-[0.1] flex-col justify-center items-center gap-y-1 pr-1.5">
          <Text className="text-black capitalize">{item.status}</Text>
          <TouchableOpacity
            onPress={() => console.log(`Item: ${item.noPengajuanSurvey}`)}>
            <Feather name="more-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

interface JobListProps {
  data: JobProps[];
  search: string;
  refreshing: boolean;
  onRefresh: () => void;
  searchByTerm: string;
  navigation: NativeStackNavigationProp<RootStackParamList, 'mainPage'>;
}

const JobList = ({
  data,
  search,
  refreshing,
  onRefresh,
  searchByTerm,
  navigation,
}: JobListProps) => {
  type JobPropsKey = keyof JobProps;

  const filterData =
    searchByTerm === ''
      ? // Kalau search by belom dipilih
        data.filter(item =>
          Object.values(item).some(value =>
            value.toString().toLowerCase().includes(search.toLowerCase()),
          ),
        )
      : // Kalau search by sudah dipilih
        data.filter(
          item =>
            typeof item[searchByTerm as JobPropsKey] === 'string' &&
            (item[searchByTerm as JobPropsKey] as string)
              .toLowerCase()
              .includes(search.toLowerCase()),
        );

  const sortedDataByDate = filterData.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });
  return (
    <View className="flex-1 w-full bg-[#ffffea]">
      {filterData.length === 0 ? (
        <View className="w-full h-full flex flex-col justify-center items-center">
          <MIcon name="do-not-disturb-alt" size={80} color="black" />
          <Text className="italic text-gray-600 capitalize text-xl">
            No Data Found
          </Text>
        </View>
      ) : (
        <FlatList
          data={sortedDataByDate}
          renderItem={({item, index}) => (
            <Job item={item} index={index} navigation={navigation} />
          )}
          keyExtractor={(item, index) => `${item.rowid}-${index}`}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default JobList;
