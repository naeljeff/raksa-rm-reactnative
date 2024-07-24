import {Text, View} from 'react-native';
import React, {useState} from 'react';

interface userInfo {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [formInput, setFormInput] = useState<userInfo>({
    username: '',
    password: '',
  });
  
  return (
    <View>
      <Text>LoginForm</Text>
    </View>
  );
};

export default LoginForm;
