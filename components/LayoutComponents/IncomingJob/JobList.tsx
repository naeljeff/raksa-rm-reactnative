import {
  FlatList,
  View,
  Text,
  RefreshControl,
} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../App';
import {JobProps} from '../../../props/JobProps';
import Job from './Job';

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
