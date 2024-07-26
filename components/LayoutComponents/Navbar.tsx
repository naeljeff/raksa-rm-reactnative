import {Text, View, Pressable} from 'react-native';
import {Badge} from 'react-native-paper';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Navbar = () => {
  const menu: string[] = [
    'Incoming Job',
    'Job Monitoring',
    'My Survey',
    'History',
  ];
  const [index, setIndex] = useState<number>(0);
  return (
    <View className="w-full h-[50px]">
      <LinearGradient
        colors={['#fff', '#ffbc3c', '#ffbc3c', '#ffbc3c', '#ffa008']}
        className="h-full flex justify-center">
        {/* Menu */}
        <View className="w-full flex flex-row justify-center gap-x-2">
          {menu.map((item, idx) => (
            <View className="flex flex-row items-center justify-center">
              <Pressable
                key={idx}
                onPress={() => setIndex(idx)}
                className={`mr-2 ${
                  index === idx ? 'bg-[#585454] py-1 px-1 rounded' : ''
                }`}>
                <Text
                  className={`relative text-sm text-black ${
                    index === idx ? 'text-white' : 'text-black'
                  }`}>
                  {item}
                </Text>
                {idx === 0 && (
                  <Badge
                    size={16}
                    className={`absolute ${
                      index === 0
                        ? 'top-[-3px] right-[-5px]'
                        : 'top-[-7px] right-[-8px]'
                    }`}>
                    3
                  </Badge>
                )}
              </Pressable>
              {idx === menu.length - 1 ? (
                ''
              ) : (
                <View className="h-full flex justify-center items-center border-r border-black" />
              )}
            </View>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Navbar;
