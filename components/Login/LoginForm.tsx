import {Text, View} from 'react-native';
import {Surface, TextInput, Button, HelperText} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Toast from 'react-native-simple-toast';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';

import {RootStackParamList} from '../../App';
import {AppDispatch} from '../../store';
import {
  getUserLoginData,
  selectUserLoading,
  selectUserLoggedIn,
  selectUserError,
} from '../../store/slices/userSlice';

interface userInfo {
  username: string;
  password: string;
}

type LoginFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'login'>;
};

const LoginForm = ({navigation}: LoginFormProps) => {
  const [formInput, setFormInput] = useState<userInfo>({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [deviceId, setDeviceId] = useState<string>('');
  const appVersion = '0.1.0';

  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectUserLoading);
  const loggedIn = useSelector(selectUserLoggedIn);
  const error = useSelector(selectUserError);
  DeviceInfo.getUniqueId().then(uniqueId => {
    setDeviceId(uniqueId);
  });

  useEffect(() => {
    if (loggedIn) {
      Toast.show('Login Berhasil!', Toast.LONG);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'mainPage', params: {username: formInput.username}}],
        }),
      );
    } else if (formSubmitted && error) {
      Toast.show(error, Toast.LONG);
    }
  }, [loggedIn, error]);

  const handleUsernameInput = (username: string) => {
    setFormInput({...formInput, username});
  };

  const handlePasswordInput = (password: string) => {
    setFormInput({...formInput, password});
  };

  const hasUsername = () => {
    return formInput.username.length === 0;
  };

  const hasPassword = () => {
    return formInput.password.length === 0;
  };

  const validateUserLogin = async () => {
    setFormSubmitted(true);
    if (!hasUsername() && !hasPassword()) {
      dispatch(getUserLoginData(formInput));
    } else {
      console.log('Data input kosong');
    }
  };

  const handleFormSubmit = () => {
    validateUserLogin();
  };

  return (
    <View className="flex-1 flex-col justify-center items-center space-y-4">
      <Text className="text-2xl font-semibold text-black tracking-wide -mt-2">
        Sign In
      </Text>

      <Surface elevation={5} className="rounded-xl mb-2">
        <View className="container h-[300px] w-[300px] bg-white/80 rounded-xl p-5">
          {/* Username */}
          <TextInput
            mode="outlined"
            label="Username"
            placeholder="Enter your username"
            outlineColor="#94a3b8"
            outlineStyle={{
              borderRadius: 10,
            }}
            activeOutlineColor="#334155"
            className="w-full shadow-xl"
            onChangeText={handleUsernameInput}
            value={formInput.username}
            right={<TextInput.Icon icon="at" pointerEvents="none" />}
          />
          {formSubmitted && hasUsername() && (
            <HelperText type="error">Username tidak boleh kosong!</HelperText>
          )}

          {/* Password */}
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            outlineColor="#94a3b8"
            outlineStyle={{
              borderRadius: 10,
            }}
            activeOutlineColor="#334155"
            className="mt-5 shadow-xl rounded-full"
            onChangeText={handlePasswordInput}
            value={formInput.password}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
          {formSubmitted && hasPassword() && (
            <HelperText type="error">Password tidak boleh kosong!</HelperText>
          )}

          <View
            className={`w-full flex justify-center items-center mt-16 ${
              formSubmitted
                ? !hasUsername() && !hasPassword()
                  ? 'mt-16'
                  : !hasUsername() || !hasPassword()
                  ? 'mt-8'
                  : 'mt-4'
                : ''
            }`}>
            <Surface elevation={3} className="rounded-full">
              <Button
                mode="contained-tonal"
                className="w-[60%]"
                buttonColor="#f7ebd7"
                style={{
                  borderWidth: 1,
                  borderColor: '#64748b',
                  borderRadius: 50,
                }}
                textColor="black"
                rippleColor="white"
                onPress={handleFormSubmit}>
                {isLoading ? 'Loading...' : 'Login'}
              </Button>
            </Surface>
          </View>
        </View>
      </Surface>

      <Text className="text-sm text-black tracking-tighter -mb-3">
        {`Your Hardware ID: ${deviceId}`}
      </Text>
      <Text className="text-sm text-black tracking-tighter">
        {`App Version: ${appVersion}`}
      </Text>
    </View>
  );
};

export default LoginForm;
