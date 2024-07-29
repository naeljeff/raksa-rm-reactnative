import {Text, View} from 'react-native';
import {Surface, TextInput, Button, HelperText} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Toast from 'react-native-simple-toast';
import {CommonActions} from '@react-navigation/native';
import React, {useState} from 'react';

import {RootStackParamList} from '../../App';
import {validateUser} from '../../services/api/userValidation';

interface userInfo {
  username: string;
  password: string;
}

type LoginFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'login'>;
};

// interface TextInputIconProps {
//   icon: string;
//   size: number;
//   color: string;
//   style?: StyleProp<ViewStyle>;
// }

// function TextInputIcon({
//   icon = 'at',
//   size = 18,
//   color = 'black',
//   style,
// }: TextInputIconProps) {
//   return <Icon name={icon} size={size} color={color} style={style} />;
// }

const LoginForm = ({navigation}: LoginFormProps) => {
  const [formInput, setFormInput] = useState<userInfo>({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isUserValidated, setIsUserValidated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    setIsLoading(true);
    setIsUserValidated(false);
    try {
      const response = await validateUser(
        formInput.username,
        formInput.password,
      );

      // validate data
      const msg_code: string = response.messagecode;

      // double validation for user and password
      if (
        msg_code === '00' &&
        formInput.username === response.info[0].USER_NAME &&
        formInput.password === response.info[0].CURRENT_PASSWORD
      ) {
        setIsUserValidated(true);
        console.log('masuk login');
        setFormInput({username: '', password: ''});
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'mainPage',
                params: {
                  username: formInput.username,
                  password: formInput.password,
                },
              },
            ],
          }),
        );

        Toast.show('Login Berhasil!', Toast.LONG);
        setFormSubmitted(false);
      } else {
        setIsUserValidated(false);
        console.log('Data salah');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleFormSubmit = () => {
    setFormSubmitted(true);
    if (hasUsername() || hasPassword()) {
      console.log('Data input kosong');
    } else {
      validateUserLogin();
    }
  };

  return (
    <View className="flex-1 flex-col justify-center items-center gap-y-8">
      <Text className="text-2xl font-semibold text-black tracking-wide -mt-2">
        Sign In
      </Text>

      <Surface elevation={5} className="rounded-xl">
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
                icon={showPassword ? 'eye' : 'eye-off'}
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
                buttonColor="#ffffea"
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

            {formSubmitted && !isUserValidated && (
              <HelperText type="error">
                Username/Password tidak sesuai!
              </HelperText>
            )}
          </View>
        </View>
      </Surface>

      <Text className="text-sm text-black tracking-tighter">
        Your Hardware ID:
      </Text>
    </View>
  );
};

export default LoginForm;
