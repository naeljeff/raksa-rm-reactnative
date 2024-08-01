import {Text, View, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Badge, Surface} from 'react-native-paper';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';

import {MonitoringProps} from '../../../props/MonitoringProps';
import { JobProps } from '../../../props/JobProps';
import MonitoringSubList from './MonitoringSubList';

const Monitoring = ({item, index}: {item: MonitoringProps; index: number}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handlePress = () => {
    setExpanded(!expanded);
    console.log(item.nama);
  };
  const testList = [
    {
      rowid: 45,
      noPengajuanSurvey: 'AUTO-01-00044-07-2024',
      nama: 'test terakhir s',
      alamat: 'alamat paling astaga s',
      noTelp: '0981231231',
      email: 'asdasda@gmail.com',
      catatan: 'ini catatan paling akhir di s',
      createdAt: '2024-07-23 13:39:18',
      modifiedAt: '2024-07-23 13:39:18',
      surveyToken: 'TOKEN_20240722_131713962900',
      priority: 'high',
      source: 'RAKSA_PARTNER',
      emailRequest: 'yonathanmarhan22@gmail.com',
      sobCode: '000001',
      mkgGroup: 'MKGROUP7',
      unitNo: '0001',
      merek: 'HINO',
      tipe: 'A 215',
      model: '-',
      jenisAsuransi: 'comprehensive',
      status: 'ongoing',
      platNomor: 'BA 3464 ccc',
      perluasan: ['TJH PIHAK III', 'BATB', 'DEREK & HOTLINE 24 JAM'],
    },
    {
      rowid: 46,
      noPengajuanSurvey: 'AUTO-01-00045-07-2024',
      nama: 'adasdasd',
      alamat: 'asdasdasd',
      noTelp: '131231',
      email: 'asdada@asdasd.com',
      catatan: '1adadasdas',
      createdAt: '2024-07-23 13:46:30',
      modifiedAt: '2024-07-23 13:46:30',
      surveyToken: 'TOKEN_20240722_131713962900',
      priority: 'high',
      source: 'RAKSA_PARTNER',
      emailRequest: 'yonathanmarhan22@gmail.com',
      sobCode: '000001',
      mkgGroup: 'MKGROUP7',
      unitNo: '0001',
      merek: 'DFSK',
      tipe: 'GELORA',
      model: 'BLIND VAN C35',
      jenisAsuransi: 'comprehensive',
      status: 'schedule',
      platNomor: 'BA 12314 asda',
      perluasan: ['BATB', 'KECELAKAAN DIRI PENUMPANG'],
    },
    {
      rowid: 47,
      noPengajuanSurvey: 'AUTO-01-00046-07-2024',
      nama: 'tip test 2 ',
      alamat: 'Jl Re Martadinata',
      noTelp: '081908',
      email: 'tip@mail.com',
      catatan: 'test',
      createdAt: '2024-07-23 14:02:44',
      modifiedAt: '2024-07-23 14:02:44',
      surveyToken: 'TOKEN_20240722_131713962900',
      priority: 'high',
      source: 'RAKSA_PARTNER',
      emailRequest: 'yonathanmarhan22@gmail.com',
      sobCode: '000001',
      mkgGroup: 'MKGROUP7',
      unitNo: '0001',
      merek: 'CHERY',
      tipe: 'QQ',
      model: 'GX 0.8 M/T',
      jenisAsuransi: 'comprehensive',
      status: 'reschedule',
      platNomor: 'F  55 ra',
      perluasan: ['BENGKEL RESMI', 'DEREK & HOTLINE 24 JAM'],
    },
    {
      rowid: 48,
      noPengajuanSurvey: 'AUTO-01-00047-07-2024',
      nama: 'ini test apps',
      alamat: 'alamat apps',
      noTelp: '031312312',
      email: 'email@apps.com',
      catatan: 'ini test apps',
      createdAt: '2024-07-30 10:31:51',
      modifiedAt: '2024-07-30 10:31:51',
      surveyToken: 'TOKEN_20240725_161836234400',
      priority: 'high',
      source: 'RAKSA_PARTNER',
      emailRequest: 'yonathanmarhan22@gmail.com',
      sobCode: '000001',
      mkgGroup: 'MKGROUP2',
      unitNo: '0001',
      merek: 'CHERY',
      tipe: 'OMODA',
      model: 'E5 AT',
      jenisAsuransi: 'comprehensive',
      status: 'ongoing',
      platNomor: 'BA adasd',
      perluasan: ['KPH', 'KECELAKAAN DIRI PENUMPANG'],
    },
    {
      rowid: 49,
      noPengajuanSurvey: 'AUTO-01-00048-07-2024',
      nama: 'test raksa m',
      alamat: 'alamat raksa m',
      noTelp: '0812312313',
      email: 'raksam@raksam.com',
      catatan: 'ini rico yang test',
      createdAt: '2024-07-31 09:01:48',
      modifiedAt: '2024-07-31 09:01:48',
      surveyToken: 'TOKEN_20240725_161836234400',
      priority: 'high',
      source: 'RAKSA_PARTNER',
      emailRequest: 'yonathanmarhan22@gmail.com',
      sobCode: '000001',
      mkgGroup: 'MKGROUP2',
      unitNo: '0001',
      merek: 'HYUNDAI',
      tipe: 'CRETA',
      model: '1.5 DBE IVT',
      jenisAsuransi: 'totalLossOnly',
      status: 'ongoing',
      platNomor: 'BA BABI',
      perluasan: ['BENGKEL RESMI', 'KECELAKAAN DIRI PENUMPANG'],
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
                <TouchableOpacity
                  onPress={() => console.log(`Pressed: ${item.nama}`)}>
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
                  {testList.length}
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
      {testList.map((l, i) => (
        <View key={i}>
          <ListItem
            containerStyle={{
              backgroundColor: 'rgba(255, 188, 60, 0.3)',
              paddingLeft: 0,
              paddingRight: 0,
            }}>
            <ListItem.Content>
              <MonitoringSubList item={l}/>
            </ListItem.Content>
          </ListItem>
          <View className="w-screen border-b border-black" />
        </View>
      ))}
    </ListItem.Accordion>
  );
};

export default Monitoring;
