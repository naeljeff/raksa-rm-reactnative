import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {validateUser} from '../../services/api/user/getUserLogin';
import {RootState} from '..';

type UserProps = {
  userName: string;
  fullName: string;
  department: string;
  currentPassword: string;
  email: string;
  messageCode: string;
  message: string;
};

interface UserState {
  data: UserProps;
  loggedIn: boolean;
  loading: boolean;
  error: string | null;
}

// Initial
const initialState: UserState = {
  data: {
    userName: '',
    fullName: '',
    department: '',
    currentPassword: '',
    email: '',
    messageCode: '',
    message: '',
  },
  loggedIn: false,
  loading: false,
  error: null,
};

export const getUserLoginData = createAsyncThunk(
  'user/getUserLogin',
  async (userInfo: {username: string; password: string}) => {
    const response = await validateUser(userInfo.username, userInfo.password);
    return {...response, userInfo};
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.data = initialState.data;
      state.loggedIn = false;
    },
  },
  extraReducers: builder => {
    // Kalau berhasil login
    builder.addCase(getUserLoginData.fulfilled, (state, action) => {
      const {info, messagecode, message, userInfo} = action.payload;

      // Validasi dulu
      if (
        messagecode === '00' &&
        message === 'Success' &&
        userInfo.username === info[0].USER_NAME &&
        userInfo.password === info[0].CURRENT_PASSWORD
      ) {
        // update the state data
        state.data = {
          userName: info[0].USER_NAME,
          fullName: info[0].FULL_NAME,
          department: info[0].DEPARTMENT,
          currentPassword: info[0].CURRENT_PASSWORD,
          email: info[0].EMAIL,
          messageCode: messagecode,
          message: message,
        };
        state.loggedIn = true;
        state.error = null;
      } else {
        state.error = 'Username/password tidak sesuai!';
      }
      state.loading = false;
    });

    // Kalau pending
    builder.addCase(getUserLoginData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    // Kalau rejected
    builder.addCase(getUserLoginData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Gagal masuk';
    });
  },
});

export const {logout} = userSlice.actions;
export const selectUserData = (state: RootState) => state.user.data;
export const selectUserLoggedIn = (state: RootState) => state.user.loggedIn;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;
export default userSlice.reducer;
