import {Text, View, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Badge, Surface} from 'react-native-paper';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';

import {MonitoringProps} from '../../../props/MonitoringProps';

const Monitoring = ({item, index}: {item: MonitoringProps; index: number}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handlePress = () => setExpanded(!expanded);
  const list2 = [
    {
      name: 'a',
      value: 'alamat',
    },
    {
      name: 'b',
      value: 'babi',
    },
    {
      name: 'c',
      value: 'caonima',
    },
  ];

  return (
    <ListItem.Accordion
      content={
        <ListItem.Content className="bg-[#ffffea]">
          <View className="w-screen flex-row justify-between items-center py-6 pr-10 pl-6 border-b border-black bg-[#ffffea]">
            <Text className="flex-[0.5] text-lg text-black font-semibold">
              {item.nama}
            </Text>
            <View className="flex-[0.5] flex-row justify-end items-center">
              {/* To Do List */}
              <Surface
                className="justify-center items-center border bg-white border-black rounded px-2 py-0.5"
                elevation={2}>
                <TouchableOpacity onPress={() => console.log('press')}>
                  <Text className="text-xs text-black tracking-tighter">
                    To Do List
                  </Text>
                </TouchableOpacity>
              </Surface>

              {/* Mail Icon */}
              <View className="flex-[0.3] flex items-center justify-center ml-2">
                <Ionicon name="mail" size={24} color="black" />
                <Badge
                  className="absolute bg-red-500 -left-0.5 top-3.5"
                  size={16}>
                  {item.jumlahTask}
                </Badge>
              </View>
            </View>
          </View>
        </ListItem.Content>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
        console.log(item.nama);
      }}
      containerStyle={{
        backgroundColor: '#ffffea',
        padding: 0,
        paddingRight: 10,
      }}>
      {list2.map((l, i) => (
        <View key={i}>
          <ListItem containerStyle={{backgroundColor: 'rgba(255, 188, 60, 0.3)', paddingLeft: 0, paddingRight: 0}}>
            <ListItem.Content style={{paddingHorizontal: 16}}>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.value}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <View className="w-screen border-b border-black" />
        </View>
      ))}
    </ListItem.Accordion>
  );
};

export default Monitoring;
