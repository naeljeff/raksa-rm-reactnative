import { Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../LayoutComponents/SearchBar'

const MySurvey = () => {
  return (
    <View className='w-full h-full flex flex-col'>
      <SearchBar />
      <Text>MySurvey</Text>
    </View>
  )
}

export default MySurvey