import {FlatList, View, Text, RefreshControl} from 'react-native';
import React, {useState, useEffect} from 'react';
import { fetchSurveyData } from '../../../services/api/survey/getSurveyData';

type JobProps = {
  id: string;
  title: string;
};

console.log('fetchSurveyData:', fetchSurveyData);

const Job = ({item}: {item: JobProps}) => (
  <View className="w-full flex flex-row justify-start items-center py-0.5 px-1 gap-x-1 border-t border-black">
    {/* <Text>{item.id}</Text>
    <Text>{item.title}</Text> */}

    {/* Icon Mail */}
    <View className="flex-[0.1]">
      <Text>Mail</Text>
      <Text>{item.id}</Text>
    </View>

    {/* Informasi kendaraan */}
    <View className="flex-[0.6] flex-col gap-y-1">
      <Text className="font-bold text-black uppercase">
        AUTO-01-00001-07-2024/0001
      </Text>
      <Text className="text-black uppercase">A</Text>
      <Text className="text-black uppercase">6287123123123</Text>
      <Text className="text-black uppercase">ALL RISK</Text>
      <Text className="text-black uppercase">Cibarusah Cikarang</Text>
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
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<JobProps[]>([]);

  const fetchData = async () => {
    try {
    //   const response = await fetchSurveyData();
    //   console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
    //   fetchData();
      setRefreshing(false);
      const dataTemp = [
        {
          id: '1',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '2',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '3',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '4',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '5',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '6',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '7',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '8',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '9',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '10',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '11',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '12',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '13',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '14',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
        {
          id: '15',
          title:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Laudantium, qui labore sit consequuntur minus iusto voluptates saepe aperiam!',
        },
      ];
      setData(dataTemp);
    }, 2000);
  };

  return (
    <View className="flex-1 w-full bg-[#ffffea]">
      <FlatList
        data={data}
        renderItem={Job}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default JobList;
