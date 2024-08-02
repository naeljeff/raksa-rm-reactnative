import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Surface} from 'react-native-paper';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {setWebViewUrl} from '../../../store/slices/webviewSlice';
import SearchBy from './SearchBy';
import SortBy from './SortBy';
import OrderBy from './OrderBy';

interface SearchBarInputProps {
  setSearchTerm: (text: string) => void;
  setSearchByTerm: (text: string) => void;
  searchTab: string;
  setSortBy: (text: string) => void;
  setOrderBy: (text: string) => void;
}

const SearchBarInput = ({
  setSearchTerm,
  searchTab,
  setSearchByTerm,
  setSortBy,
  setOrderBy,
}: SearchBarInputProps) => {
  const [localSearch, setLocalSearch] = useState<string>('');
  const [searchBy, setSearchBy] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>('');
  const [selected, setSelected] = useState<string>('');
  const [localSortBy, setLocalSortBy] = useState<string>('');
  const [localOrderBy, setLocalOrderBy] = useState<string>('');
  const dispatch = useDispatch();

  const handleClearPress = () => {
    setLocalSearch('');
    setSearchBy(false);
    setSearchTerm('');
  };

  const handleInputChange = (text: string) => {
    setLocalSearch(text);
    setSearchBy(true);
    setSearchTerm(text);
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
    setSearchByTerm(selection);
  };

  const onSortByChange = (selection: string) => {
    setLocalSortBy(selection);
    setSortBy(selection);
  };

  const onOrderByChange = (selection: string) => {
    setLocalOrderBy(selection);
    setOrderBy(selection);
  };

  const handleAddPengajuan = () => {
    const param =
      'a=TOKEN_20240731_115636324000&b=TOKEN_20240731_115636324002&c=TOKEN_20240731_115636324004';
    const webviewUrl = `https://www.rks-m.com/prog-x/pengajuan_survey/rq_survey.php?${param}`;
    dispatch(setWebViewUrl(webviewUrl));
  };

  return (
    <View className="w-full h-[80px] bg-[#f7ebd7] flex flex-col justify-center items-start">
      {/* Search Area */}
      <View className="w-full p-1 mt-1 ml-0.5 pr-2 flex flex-row justify-between items-center">
        {/* Search Bar */}
        <View className="w-full flex flex-row items-center justify-start my-1">
          <View className="w-full h-[30px] px-3 flex flex-row justify-start items-center border border-black rounded-lg bg-white">
            {/* Search Button */}
            <TouchableOpacity onPress={handleSearchIcon}>
              <Icon name="search" size={18} />
            </TouchableOpacity>

            {/* Input */}
            <TextInput
              className="w-[50%] text-black mr-8 py-1 placeholder:text-sm"
              placeholder="Search"
              style={{fontSize: 12, color: 'black'}}
              value={localSearch}
              onChangeText={handleInputChange}
            />

            {/* Clear Input */}
            {localSearch.length > 0 && (
              <TouchableOpacity
                onPress={handleClearPress}
                className="absolute right-36">
                <Icon name="close" size={20} />
              </TouchableOpacity>
            )}

            <View className="h-[70%] flex justify-center items-center border-r border-black mx-2" />

            {/* Filter */}
            <View className="h-[50px] w-full -ml-4 mb-1">
              <SearchBy
                onSearchByChange={onSearchByChange}
                searchTab={searchTab}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Filter Area */}
      <View className="w-full flex flex-row justify-between items-center mb-1">
        {/* Sort By */}
        <View className="w-[55%] h-[40px] flex flex-row gap-x-1 ml-0.5">
          <View className="w-[40%] h-[30px] border border-black bg-white rounded-lg pl-2 py-1">
            {/* Sort Option */}
            <SortBy onSortByChange={onSortByChange} />
          </View>

          <View className="w-[60%] h-[30px] text-sm border border-black bg-white rounded-lg pl-2 py-1">
            {/* Sort Order */}
            <OrderBy onOrderByChange={onOrderByChange} />
          </View>
        </View>

        {/* Add */}
        <View className="flex flex-row justify-center items-center gap-x-2 mb-2 mr-2">
          <Surface elevation={2} className="rounded-lg">
            <View className="px-1 py-1 bg-white rounded-lg">
              <TouchableOpacity onPress={handleAddPengajuan}>
                <Icon name="add" size={20} style={{color: 'black'}} />
              </TouchableOpacity>
            </View>
          </Surface>

          {/* Upload */}
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
