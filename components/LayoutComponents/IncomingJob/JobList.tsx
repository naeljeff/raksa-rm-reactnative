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
import {Badge} from 'react-native-paper';

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

const Job = ({item}: {item: JobProps}) => (
  <View className="w-full flex flex-row justify-start items-center py-0.5 px-1 gap-x-1 border-t border-black">
    {/* Icon Mail */}
    <View className="flex-[0.1] flex items-center justify-center ">
      <TouchableOpacity onPress={() => console.log('pressed')}>
        <Icon name="mail" size={24} color="black" />
        <Badge className="absolute bg-red-500 -left-1 top-3.5" size={16}>
          !
        </Badge>
      </TouchableOpacity>
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
      <Text className="text-black">0 Days</Text>
      <Text className="text-black">24-Jul-24</Text>
    </View>

    {/* Status */}
    <View className="flex-[0.1] flex-col gap-y-1">
      <Text className="text-black capitalize">{item.status}</Text>
      <Text className="text-black">-</Text>
    </View>
  </View>
);

interface JobListProps {
  data: JobProps[];
  search: string;
  refreshing: boolean;
  onRefresh: () => void;
  searchByTerm: string;
}

const JobList = ({
  data,
  search,
  refreshing,
  onRefresh,
  searchByTerm,
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
          data={filterData}
          renderItem={({item}) => <Job item={item} />}
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
