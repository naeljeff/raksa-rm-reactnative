import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {List} from 'react-native-paper';

import {ListItem} from '@rneui/themed';

import SearchBarInput from '../../LayoutComponents/SearchBarInput';

const IncomingJobPage = () => {
  const list2 = [
    {name: 'First item', subtitle: 'Subtitle 1'},
    {name: 'Second item', subtitle: 'Subtitle 2'},
    {name: 'Third item', subtitle: 'Subtitle 3'},
  ];
  const [selected, setSelected] = useState('');
  const [expanded, setExpanded] = useState(false);
  return (
    <View className="w-full h-full flex flex-col">
      <SearchBarInput />
    </View>
  );
};

export default IncomingJobPage;
