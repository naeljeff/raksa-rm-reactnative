import {Text, View} from 'react-native';
import React, {useState} from 'react';

import SearchBarInput from '../../LayoutComponents/SearchBar/SearchBarInput';
import Information from '../../LayoutComponents/Information';
import JobList from '../../LayoutComponents/IncomingJob/JobList';

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

      {/* Information */}
      <Information />

      <JobList />
    </View>
  );
};

export default IncomingJobPage;
