import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchSurveyData} from '../../services/api/survey/getSurveyData';
import {RootState} from '..';
import {JobProps} from '../../props/JobProps';

interface SurveyState {
  data: JobProps[];
  refreshing: boolean;
  specificJob?: JobProps;
}

// Buat initial state
const initialState: SurveyState = {
  data: [],
  refreshing: false,
  specificJob: undefined,
};

// Fetch the data dari api -> thunk middleware
export const fetchData = createAsyncThunk('survey/fetchData', async () => {
  const response = await fetchSurveyData();
  return response.data;
});

export const fetchSpecificJob = createAsyncThunk(
  'survey/fetchSpecificJob',
  async ({
    noPengajuanSurvey,
    unitNo,
  }: {
    noPengajuanSurvey: string;
    unitNo: string;
  }) => {
    const response = await fetchSurveyData();
    const specificJob = response.data.find(
      (item: JobProps) =>
        item.noPengajuanSurvey === noPengajuanSurvey && item.unitNo === unitNo,
    );
    return specificJob;
  },
);

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
    setSpecificJob(state, action) {
      state.specificJob = action.payload;
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

    // For specific job
    builder.addCase(fetchSpecificJob.fulfilled, (state, action) => {
      state.specificJob = action.payload;
    });
  },
});

export const {startRefreshing, stopRefreshing, setSpecificJob} =
  surveySlice.actions;
export const selectData = (state: RootState) => state.survey.data;
export const selectRefreshing = (state: RootState) => state.survey.refreshing;
export const selectSpecificJob = (state: RootState) => state.survey.specificJob;
export const getDataCount = (state: RootState) => state.survey.data.length;
export default surveySlice.reducer;
