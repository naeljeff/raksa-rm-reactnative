import {FlatList, View, Text, RefreshControl} from 'react-native';
import React, {useState, useCallback, useMemo, useEffect} from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../App';
import {JobProps} from '../../../props/JobProps';
import Job from './Job';
import {calcAgingDate} from '../../../utilities/function';

interface JobListProps {
  data: JobProps[];
  search: string;
  refreshing: boolean;
  onRefresh: () => void;
  searchByTerm: string;
  sortBy: string;
  orderBy: string;
  navigation: NativeStackNavigationProp<RootStackParamList, 'mainPage'>;
}

const JobList = ({
  data,
  search,
  refreshing,
  onRefresh,
  searchByTerm,
  navigation,
  sortBy,
  orderBy,
}: JobListProps) => {
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const pageSize = 10;

  type JobPropsKey = keyof JobProps;

  const filterData = useMemo(() => {
    const filtered =
      searchByTerm === ''
        ? data.filter(item =>
            Object.values(item).some(value =>
              value.toString().toLowerCase().includes(search.toLowerCase()),
            ),
          )
        : data.filter(
            item =>
              typeof item[searchByTerm as JobPropsKey] === 'string' &&
              (item[searchByTerm as JobPropsKey] as string)
                .toLowerCase()
                .includes(search.toLowerCase()),
          );
    return filtered;
  }, [data, search, searchByTerm]);

  const sortedDataByDate = useMemo(() => {
    let sortedData = [...filterData];
    if (sortBy === 'aging') {
      sortedData.sort((a, b) => {
        const agingA = calcAgingDate(a.createdAt);
        const agingB = calcAgingDate(b.createdAt);
        return orderBy === 'asc' ? agingA - agingB : agingB - agingA;
      });
    } else {
      sortedData.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        if (sortBy === '') {
          return orderBy === 'asc' ? dateA - dateB : dateB - dateA;
        } else {
          return orderBy === 'asc' ? dateA - dateB : dateB - dateA;
        }
      });
    }
    return sortedData;
  }, [filterData, sortBy, orderBy]);

  const paginatedData = useMemo(() => {
    return sortedDataByDate.slice(0, page * pageSize);
  }, [sortedDataByDate, page]);

  // Reset page when orderBy or sortBy changes
  useEffect(() => {
    setPage(1);
  }, [sortBy, orderBy, search, searchByTerm]);

  const handleLoadMore = useCallback(() => {
    if (loadMore || paginatedData.length >= sortedDataByDate.length) return;
    setLoadMore(true);

    setTimeout(() => {
      setPage(prevPage => prevPage + 1);
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
    <View className="flex-1 w-full bg-[#f7ebd7]">
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
