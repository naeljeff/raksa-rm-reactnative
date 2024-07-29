import {FlatList, View, Text, RefreshControl} from 'react-native';
import React, {useState} from 'react';

type JobProps = {
  id: string;
  title: string;
};

const Job = ({item}: {item: JobProps}) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);

const JobList = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<JobProps[]>([]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
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
    <View className="w-full flex-1 bg-[#ffffea]">
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
