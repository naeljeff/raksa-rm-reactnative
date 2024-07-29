import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchSurveyData} from '../../services/api/survey/getSurveyData';
import { RootState } from '..';

type JobProps = {
  rowid: number;
  noPengajuanSurvey: string;
  unitNo: string;
  alamat: string;
  noTelp: string;
  email: string;
  createdAt: string;
  merek: string;
  tipe: string;
  model: string;
  jenisAsuransi: string;
};

interface SurveyState {
  data: JobProps[];
  refreshing: boolean;
}

// Buat initial state
const initialState: SurveyState = {
  data: [],
  refreshing: false,
};

// Fetch the data dari api -> thunk middleware
export const fetchData = createAsyncThunk('survey/fetchData', async () => {
  const response = await fetchSurveyData();
  return response.data;
});

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    startRefreshing(state) {
      state.refreshing = true;
    },
    stopRefreshing(state) {
      state.refreshing = false;
    },
  },
  extraReducers: builder => {
    // Builder buat fetch data
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // Simpen datanya dari payload ke state
      state.data = action.payload;
      state.refreshing = false;
    });

    // Kalau pending
    builder.addCase(fetchData.pending, (state, action) => {
      state.refreshing = true;
    });

    // Kalau rejected
    builder.addCase(fetchData.rejected, (state, action) => {
      state.refreshing = false;
    });
  },
});

export const {startRefreshing, stopRefreshing} = surveySlice.actions;
export const getDataCount = (state: RootState) => state.survey.data.length;
export default surveySlice.reducer;
