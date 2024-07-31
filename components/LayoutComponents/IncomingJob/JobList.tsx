import {
  FlatList,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Badge} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../App';
import {JobProps} from '../../../props/JobProps';
import { calcAgingDate, formatDate } from '../../../utilities/function';
import JobListMenu from './JobListMenu';

interface JobPageProps {
  item: JobProps;
  index: number;
  navigation: NativeStackNavigationProp<RootStackParamList, 'mainPage'>;
}

const Job = React.memo(({item, index, navigation}: JobPageProps) => {
  const dayDiff = calcAgingDate(item.createdAt);
  const formattedDate = formatDate(item.createdAt);

  const handleListPress = () => {
    console.log(`Index: ${index} | Item: ${item.noPengajuanSurvey}`);
    navigation.navigate('formFUAIncoming', {
      item: item,
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
          <Text className="text-black uppercase">{`${
            item.jenisAsuransi
          } + ${item.perluasan.join('; ')}`}</Text>
          <Text className="text-black uppercase">{item.alamat}</Text>
        </View>

        {/* Due Date */}
        <View className="flex-[0.2] flex-col gap-y-1">
          <Text className="text-black">{dayDiff} Days</Text>
          <Text className="text-black">{formattedDate}</Text>
        </View>

        {/* Status */}
        <View className="flex-[0.1] flex-col justify-center items-center pr-1.5">
          <Text className="text-black capitalize mb-2">{item.status}</Text>
          <JobListMenu item={item}/>
        </View>
      </TouchableOpacity>
    </View>
  );
});

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
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const pageSize = 10;

  type JobPropsKey = keyof JobProps;

  const filterData = useMemo(() => {
    const filtered =
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
    return filtered;
  }, [data, search, searchByTerm]);

  const sortedDataByDate = useMemo(() => {
    return filterData.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
  }, [filterData]);

  const paginatedData = useMemo(() => {
    return sortedDataByDate.slice(0, page * pageSize);
  }, [sortedDataByDate, page]);

  const handleLoadMore = useCallback(() => {
    if (loadMore || paginatedData.length >= sortedDataByDate.length) return;
    setLoadMore(true);

    setTimeout(() => {
      setPage(page + 1);
      setLoadMore(false);
    }, 1000);
  }, [loadMore, paginatedData.length, sortedDataByDate.length]);

  const renderItem = useCallback(
    ({item, index}: {item: JobProps; index: number}) => (
      <Job item={item} index={index} navigation={navigation} />
    ),
    [navigation],
  );

  const getKey = useCallback(
    (item: JobProps, index: number) => `${item.rowid}-${index}`,
    [],
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
          data={paginatedData}
          renderItem={renderItem}
          keyExtractor={getKey}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={pageSize}
          maxToRenderPerBatch={pageSize}
          windowSize={11}
          removeClippedSubviews={true}
        />
      )}
    </View>
  );
};

export default JobList;
