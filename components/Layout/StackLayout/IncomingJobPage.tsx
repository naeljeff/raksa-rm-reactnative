import { Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../LayoutComponents/SearchBar'

const IncomingJobPage = () => {
  return (
    <View className='w-full h-full flex flex-col'>
      <SearchBar />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum reiciendis, itaque unde eos vitae exercitationem dolores voluptatibus expedita ducimus.</Text>
    </View>
  )
}

export default IncomingJobPage