import {
  FlatList,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {Badge} from 'react-native-paper';

import {
  fetchData,
  startRefreshing,
  stopRefreshing,
} from '../../../store/slices/surveySlice';
import {RootState, AppDispatch} from '../../../store';

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
        {item.merek} - {item.tipe} - {item.model}
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
      <Text className="text-black">New</Text>
      <Text className="text-black">-</Text>
    </View>
  </View>
);

const JobList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.survey.data);
  const refreshing = useSelector((state: RootState) => state.survey.refreshing);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(startRefreshing());
    dispatch(fetchData()).finally(() => {
      dispatch(stopRefreshing());
    });
  };

  return (
    <View className="flex-1 w-full bg-[#ffffea]">
      <FlatList
        data={data}
        renderItem={({item}) => <Job item={item} />}
        keyExtractor={(item, index) => `${item.rowid}-${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default JobList;
