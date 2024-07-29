import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Surface} from 'react-native-paper';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Toast from'react-native-simple-toast';
import React from 'react';

const Header = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'login'}],
      }),
    );
    Toast.show('Logout Berhasil!', Toast.LONG);
  };

  const handleRefresh = () => {};
  return (
    <View className="w-full h-[45px] px-5 flex flex-row justify-between items-center bg-[#ffbc3c] ">
      {/* Logout Button */}
      <Surface elevation={2} className="rounded-lg">
        <View className="py-1 px-2 bg-white rounded-lg">
          <TouchableOpacity
            className=" flex flex-row gap-x-2 "
            onPress={() => {
              console.log('logout pressed');
              handleLogout();
            }}>
            <Icon name="log-out-outline" size={20} color="black" />
            <Text className="text-black">Logout</Text>
          </TouchableOpacity>
        </View>
      </Surface>

      {/* Text */}
      <Text className="text-lg text-black text-center font-semibold">RM</Text>

      {/* Refresh Button */}
      <Surface elevation={3} className="rounded-full">
        <TouchableOpacity className="w-7 h-7 flex justify-center items-center bg-white rounded-full">
          <Icon
            name="refresh"
            size={22}
            color="black"
            className="font-semibold"
          />
        </TouchableOpacity>
      </Surface>
    </View>
  );
};

export default Header;
