import {FlatList, View, Text, RefreshControl} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../App';
import Monitoring from './Monitoring';
import {MonitoringProps} from '../../../props/MonitoringProps';

const MonitoringList = () => {
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);

  const tempData: MonitoringProps[] = [
    {
      id: 1,
      nama: 'Isti marlisah',
      jumlahTask: 3,
    },
    {
      id: 2,
      nama: 'John Doe',
      jumlahTask: 13,
    },
    {
      id: 3,
      nama: 'John Smith',
      jumlahTask: 23,
    },
    {
      id: 4,
      nama: 'Aaron Smith',
      jumlahTask: 33,
    },
    {
      id: 5,
      nama: 'Bob Curtney',
      jumlahTask: 43,
    },
    {
      id: 6,
      nama: 'Isti marlisah',
      jumlahTask: 3,
    },
    {
      id: 7,
      nama: 'John Doe',
      jumlahTask: 13,
    },
    {
      id: 8,
      nama: 'John Smith',
      jumlahTask: 23,
    },
    {
      id: 9,
      nama: 'Aaron Smith',
      jumlahTask: 33,
    },
    {
      id: 10,
      nama: 'Bob Curtney',
      jumlahTask: 43,
    },
    {
      id: 11,
      nama: 'Isti marlisah',
      jumlahTask: 3,
    },
    {
      id: 12,
      nama: 'John Doe',
      jumlahTask: 13,
    },
    {
      id: 13,
      nama: 'John Smith',
      jumlahTask: 23,
    },
    {
      id: 14,
      nama: 'Aaron Smith',
      jumlahTask: 33,
    },
    {
      id: 15,
      nama: 'Bob Curtney',
      jumlahTask: 43,
    },
  ];

  const renderItem = useCallback(
    ({item, index}: {item: MonitoringProps; index: number}) => (
      <Monitoring item={item} index={index} />
    ),
    [],
  );

  const getKey = useCallback((item: MonitoringProps) => item.id.toString(), []);

  return (
    <View className="flex-1 w-full bg-[#f7ebd7]">
      {tempData.length === 0 ? (
        <View className="w-full h-full flex flex-col justify-center items-center">
          <MIcon name="do-not-disturb-alt" size={80} color="black" />
          <Text className="italic text-gray-600 capitalize text-xl">
            No Data Found
          </Text>
        </View>
      ) : (
        <FlatList
          data={tempData}
          keyExtractor={getKey}
          renderItem={renderItem}
          //   data={paginatedData}
          //   renderItem={renderItem}
          //   keyExtractor={getKey}
          //   refreshControl={
          //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          //   }
          //   onEndReached={handleLoadMore}
          //   onEndReachedThreshold={0.5}
          //   initialNumToRender={pageSize}
          //   maxToRenderPerBatch={pageSize}
          //   windowSize={11}
          //   removeClippedSubviews={true}
        />
      )}
    </View>
  );
};

export default MonitoringList;
