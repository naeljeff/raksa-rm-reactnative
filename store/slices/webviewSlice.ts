import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '..';

interface WebViewState {
  url: string | null;
}

const initialState: WebViewState = {
  url: null,
};

const webViewSlice = createSlice({
  name: 'webView',
  initialState,
  reducers: {
    setWebViewUrl(state, action) {
      state.url = action.payload;
    },
    clearWebViewUrl(state) {
      state.url = null;
    },
  },
});

export const { setWebViewUrl, clearWebViewUrl } = webViewSlice.actions;
export const selectWebViewUrl = (state: RootState) => state.webView.url;
export default webViewSlice.reducer;