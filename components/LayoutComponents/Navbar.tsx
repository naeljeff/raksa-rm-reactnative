import {Text, View, Pressable} from 'react-native';
import {Badge} from 'react-native-paper';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

import {getDataCount} from '../../store/slices/surveySlice';
import {RootState} from '../../store';

interface NavbarProps {
  onMenuChange: (option: string) => void;
}

const Navbar = ({onMenuChange}: NavbarProps) => {
  const menu: string[] = [
    'Incoming Job',
    'Job Monitoring',
    'My Survey',
    'History',
  ];
  const [index, setIndex] = useState<number>(0);

  const handleMenuPress = (option: string, idx: number) => {
    setIndex(idx);
    onMenuChange(option);
  };

  const dataCount = useSelector((state: RootState) => getDataCount(state));

  return (
    <View className="w-full h-[50px]">
      <LinearGradient
        colors={['#fff', '#f5af46', '#f5af46', '#f5af46', '#ffa008']}
        className="h-full flex justify-center">
        {/* Menu */}
        <View className="w-full flex flex-row justify-center gap-x-2">
          {menu.map((item, idx) => (
            <View
              key={idx}
              className="flex flex-row items-center justify-center">
              <Pressable
                onPress={() => handleMenuPress(item, idx)}
                className={`mr-2 ${
                  index === idx ? 'bg-[#585454] py-1.5 px-1 rounded' : ''
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
                    className={`absolute bg-red-500 ${
                      index === 0
                        ? 'top-[-3px] right-[-5px]'
                        : 'top-[-7px] right-[-8px]'
                    }`}>
                    {dataCount > 99 ? '99+' : dataCount}
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
