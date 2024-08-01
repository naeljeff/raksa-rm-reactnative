import { TouchableOpacity, View, TextInput  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import React, {useState} from 'react'
import { Surface} from 'react-native-paper';
import SearchBy from './SearchBy';

interface SearchBarInputProps {
  setSearchTerm: (text: string) => void;
  setSearchByTerm: (text: string) => void;
  searchTab: string;
}

const SearchBarHistory = ({setSearchTerm, setSearchByTerm, searchTab} : SearchBarInputProps) => {
  const [localSearch, setLocalSearch] = useState<string>('');
  const [searchBy, setSearchBy] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>('');
  const [selected, setSelected] = useState<string>('');

  const handleClearPress = () => {
    setLocalSearch('');
    setSearchBy(false);
    setSearchTerm('');
  };

  const onSearchByChange = (selection: string) => {
    setSelected(selection);
    setSearchByTerm(selection);
  };

  const handleInputChange = (text: string) => {
    setLocalSearch(text);
    setSearchBy(true);
    setSearchTerm(text);
  };

  return (
    <View className="w-full h-[80px] bg-[#ffffea] flex flex-col justify-center items-start">
      {/* Search Area */}
      <View className="w-full p-1 mt-1 ml-0.5 pr-2 flex flex-row justify-between items-center">
        {/* Search Bar */}
        <View className="w-full flex flex-row items-center justify-start my-1">
          <View className="w-full h-[30px] px-3 flex flex-row justify-start items-center border border-black rounded-lg bg-white">
            {/* Search Button */}
            <TouchableOpacity onPress={() => console.log('searched')}>
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
        <View className="w-[55%] h-[40px] flex flex-row gap-x-1 ml-0.5" />

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
  )
}

export default SearchBarHistory