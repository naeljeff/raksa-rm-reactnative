import {configureStore} from '@reduxjs/toolkit';
import surveyReducer from './slices/surveySlice';
import userReducer from './slices/userSlice';
import processedSurveyReducer from './slices/processedSurveySlice';
import webViewReducer from './slices/webviewSlice';

const store = configureStore({
  reducer: {
    // List reducer
    survey: surveyReducer,
    user: userReducer,
    processedSurvey: processedSurveyReducer,
    webView: webViewReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;