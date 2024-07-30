import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';

interface SearchProps {
  onSearchByChange: (selection: string) => void;
}

const SearchBy = ({onSearchByChange}: SearchProps) => {
  const [selected, setSelected] = useState('');
  // 
  const searchByList = [
    {name: 'First item', value: 'Subtitle 1'},
    {name: 'Second item', value: 'Subtitle 2'},
    {name: 'Third item', value: 'Subtitle 3'},
  ];

  const handleSearchBy = (option: {name: string; value: string}) => {
    setSelected(option.value);
    onSearchByChange(option.value);
  };
  return (
    <View className="w-[33%] mt-4 ml-3">
      <Dropdown
        data={searchByList}
        search
        activeColor="#ffffea"
        maxHeight={300}
        labelField="name"
        valueField="value"
        placeholder="Search By"
        searchPlaceholder="Search By"
        value={selected}
        selectedTextStyle={{fontSize: 12}}
        itemTextStyle={{fontSize: 12}}
        inputSearchStyle={{fontSize: 12}}
        placeholderStyle={{fontSize: 12}}
        style={{paddingHorizontal: 4}}
        onChange={option => handleSearchBy(option)}
      />
    </View>
  );
};

export default SearchBy;
