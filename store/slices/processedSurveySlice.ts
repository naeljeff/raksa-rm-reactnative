import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchProcessedSurveyData} from '../../services/api/survey/getProcessedSurveyData';
import {RootState} from '..';
import {JobProps} from '../../props/JobProps';

interface ProcessedSurveyState {
  data: JobProps[];
  refreshing: boolean;
}

// Initial state
const initialState: ProcessedSurveyState = {
  data: [],
  refreshing: false,
};

export const fetchProcessedData = createAsyncThunk(
  'survey/fetchProcessedData',
  async () => {
    const response = await fetchProcessedSurveyData();
    return response.data;
  },
);

const processedSurveySlice = createSlice({
  name: 'processedSurvey',
  initialState,
  reducers: {
    startRefreshingProcessedSurvey(state) {
      state.refreshing = true;
    },
    stopRefreshingProcessedSurvey(state) {
      state.refreshing = false;
    },
  },
  extraReducers: builder => {
    // Ambil data kalau berhasil
    builder.addCase(fetchProcessedData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.refreshing = false;
    });

    // Kalau pending
    builder.addCase(fetchProcessedData.pending, (state, action) => {
      state.refreshing = true;
    });

    // Kalau gagal
    builder.addCase(fetchProcessedData.rejected, (state, action) => {
      state.refreshing = false;
    });
  },
});

export const { startRefreshingProcessedSurvey, stopRefreshingProcessedSurvey } = processedSurveySlice.actions;
export const selectProcessedData = (state: RootState) => state.processedSurvey.data;
export const selectProcessedRefreshing = (state: RootState) => state.processedSurvey.refreshing;
export const getProcessedDataCount = (state: RootState) => state.processedSurvey.data.length;
export default processedSurveySlice.reducer;