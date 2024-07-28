import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import SearchBy from './SearchBar/SearchBy';
import SortBy from './SearchBar/SortBy';
import OrderBy from './SearchBar/OrderBy';
import {Surface} from 'react-native-paper';

const SearchBarInput = () => {
  const [search, setSearch] = useState<string>('');
  const [searchBy, setSearchBy] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>('');
  const [selected, setSelected] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');

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

  const handleSortOrder = (choice: {name: string; value: string}) => {
    setSortOrder(choice.value);
  };

  // Filter

  const onSearchByChange = (selection: string) => {
    setSelected(selection);
    console.log(selection);
  };

  const onSortByChange = (selection: string) => {
    setSortBy(selection);
    console.log(selection);
  };

  const onOrderByChange = (selection: string) => {
    setOrderBy(selection);
    console.log(selection);
  };

  return (
    <View className="w-full h-[80px] bg-[#ffffea] flex flex-col justify-center items-start">
      {/* Search Area */}
      <View className="w-full p-1 mt-1 flex flex-row justify-between items-center">
        {/* Search Bar */}
        <View className="w-full flex flex-row items-center justify-start mt-2">
          <View className="w-full h-[35px] px-3 flex flex-row justify-start items-center border border-black rounded-full bg-white">
            {/* Search Button */}
            <TouchableOpacity onPress={handleSearchIcon}>
              <Icon name="search" size={18} />
            </TouchableOpacity>

            {/* Input */}
            <TextInput
              className="w-[50%] text-black mr-8 py-1 placeholder:text-sm"
              placeholder="Search"
              style={{fontSize: 12}}
              value={search}
              onChangeText={handleInputChange}
            />

            {/* Clear Input */}
            {search.length > 0 && (
              <TouchableOpacity
                onPress={handleClearPress}
                className="absolute right-36">
                <Icon name="close" size={20} />
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
      <View className="w-full flex flex-row justify-between items-center mb-1">
        {/* Sort By */}
        <View className="w-[55%] h-[40px] flex flex-row gap-x-1 ml-0.5">
          <View className="w-[50%] h-[30px] border border-black bg-white rounded-full pl-2 py-1">
            {/* Sort Option */}
            <SortBy onSortByChange={onSortByChange} />
          </View>

          <View className="w-[50%] h-[30px] text-sm border border-black bg-white rounded-full pl-2 py-1">
            {/* Sort Order */}
            <OrderBy onOrderByChange={onOrderByChange} />
          </View>
        </View>

        {/* Upload */}
        <View className="flex flex-row justify-center items-center gap-x-2 mb-2 mr-2">
          <Surface elevation={2} className="rounded-lg">
            <View className="px-1 py-1 bg-white rounded-lg">
              <TouchableOpacity onPress={() => console.log('Add')}>
                <Icon name="add" size={20} style={{color: 'black'}} />
              </TouchableOpacity>
            </View>
          </Surface>

          <Surface elevation={2} className="roundedlg">
            <View className="px-1 py-1 bg-white rounded-lg">
              <TouchableOpacity onPress={() => console.log('upload')}>
                <Feather name="upload" size={20} style={{color: 'black'}} />
              </TouchableOpacity>
            </View>
          </Surface>
        </View>
      </View>
    </View>
  );
};

export default SearchBarInput;
