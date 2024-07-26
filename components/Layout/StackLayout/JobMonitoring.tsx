import { Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../LayoutComponents/SearchBar'

const JobMonitoring = () => {
  return (
    <View className='w-full h-full flex flex-col'>
      <SearchBar />
      <Text>JobMonitoring</Text>
    </View>
  )
}

export default JobMonitoring