import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const HeaderIncomingFUA = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full h-[45px] px-1 flex flex-row justify-between items-center bg-[#ffbc3c] ">
      {/* Back Button */}
      <View>
        <TouchableOpacity
          className=" flex flex-row gap-x-1"
          onPress={() => {
            // console.log('pressed');
            navigation.goBack();
          }}>
          <Ionicons name="chevron-back" size={20} color="black" />
          <Text className="text-black">RM</Text>
        </TouchableOpacity>
      </View>

      {/* Text */}
      <Text className="text-lg text-black font-semibold mr-12">FUA</Text>

      {/* Empty View */}
      <View />
    </View>
  );
};

export default HeaderIncomingFUA;
