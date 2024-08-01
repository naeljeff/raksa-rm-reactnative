import { Text, View } from 'react-native'
import React from 'react'

import SearchBarHistory from '../SearchBar/SearchBarHistory'

const History = () => {
  return (
    <View className='w-full h-full flex flex-col'>
      <SearchBarHistory />
      <Text>History</Text>
    </View>
  )
}

export default History