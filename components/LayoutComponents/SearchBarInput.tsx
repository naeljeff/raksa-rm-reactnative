import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import SearchBy from './SearchBar/SearchBy';

const SearchBarInput = () => {
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState(false);
  const [selected, setSelected] = useState('');

  const onSearchByChange = (selection: string) => {
    setSelected(selection);
    console.log(selected);
  };

  const handleClearPress = () => {
    setSearch('');
    setSearchBy(false);
  };

  const handleInputChange = (text: string) => {
    setSearch(text);
    setSearchBy(true);
  };

  const handleSearchIcon = () => {
    console.log('Search icon pressed!');
  };

  return (
    <View className="w-full h-[80px] bg-[#ffffea] flex flex-col justify-center items-start">
      {/* Search Area */}
      <View className="w-full p-1 -mt-3 flex flex-row justify-between items-center">
        {/* Search Bar */}
        <View className="w-full flex flex-row items-center justify-start mt-2">
          <View className="w-full h-[40px] px-3  flex flex-row justify-start items-center border border-black rounded-full bg-white">
            {/* Search Button */}
            <TouchableOpacity onPress={handleSearchIcon}>
              <Icon name="search" size={20} />
            </TouchableOpacity>

            {/* Input */}
            <TextInput
              className="w-[50%] text-black mr-8"
              placeholder="Search"
              value={search}
              onChangeText={handleInputChange}
            />

            {/* Clear Input */}
            {search.length > 0 && (
              <TouchableOpacity
                onPress={handleClearPress}
                className="absolute right-36">
                <Icon name="close" size={24} />
              </TouchableOpacity>
            )}

            <View className="h-[70%] flex justify-center items-center border-r border-black mx-2" />

            {/* Filter */}
            <View className="h-[50px] w-full -ml-4 mb-1">
              <SearchBy onSearchByChange={onSearchByChange} />
            </View>
          </View>
        </View>
      </View>
      {/* Filter Area */}
      <View className="w-full flex flex-row justify-start items-center">
        <Text>qwe</Text>
        <Text>qwe</Text>
        <Text>asd</Text>
        <Text>asd</Text>
      </View>
    </View>
  );
};

export default SearchBarInput;
