import {View} from 'react-native';
import React, {useState} from 'react';

import SearchBarInput from '../../LayoutComponents/SearchBar/SearchBarInput';
import Information from '../../LayoutComponents/Information';
import JobList from '../../LayoutComponents/IncomingJob/JobList';

const IncomingJobPage = () => {
  const [selected, setSelected] = useState('');
  const [expanded, setExpanded] = useState(false);
  return (
    <View className="w-full h-full flex flex-1 flex-col">
      <SearchBarInput />

      {/* Information */}
      <Information />

      <JobList />
    </View>
  );
};

export default IncomingJobPage;
