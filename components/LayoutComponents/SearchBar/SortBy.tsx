import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';

interface SortProps {
  onSortByChange: (selection: string) => void;
}

const SortBy = ({onSortByChange}: SortProps) => {
  const [sortBy, setSortBy] = useState<string>('');

  const sortByList = [
    {name: 'Item 1', value: '1'},
    {name: 'Item 2', value: '2'},
    {name: 'Item 3', value: '3'},
    {name: 'Item 4', value: '4'},
    {name: 'Item 5', value: '5'},
  ];

  const handleSortByChange = (selection: {name: string; value: string}) => {
    setSortBy(selection.value);
    onSortByChange(selection.value);
  };

  return (
    <Dropdown
      data={sortByList}
      search
      activeColor="#ffffea"
      maxHeight={300}
      labelField="name"
      valueField="value"
      placeholder="Sort By"
      searchPlaceholder="Sort By"
      value={sortBy}
      selectedTextStyle={{fontSize: 12}}
      itemTextStyle={{fontSize: 12}}
      inputSearchStyle={{fontSize: 12}}
      placeholderStyle={{fontSize: 12}}
      style={{paddingHorizontal: 4}}
      onChange={selection => handleSortByChange(selection)}
    />
  );
};

export default SortBy;
