import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFilteredJobs = createAsyncThunk(
  'job/fetchFilteredJobs',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { search, location, isFullTimeOnly } = state.job;
    try {
      const URL = '/api/get-jobs/filtered-jobs';
      const response = await axios.get(URL, {
        params: {
          search,
          location,
          isFullTimeOnly,
        },
      });

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchMoreJobs = createAsyncThunk(
  'job/fetchMoreJobs',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { jobs } = state.job;

    try {
      const URL = '/api/get-jobs/';
      const response = await axios.get(URL, {
        params: {
          startIndex: jobs.length,
          endIndex: jobs.length + 3,
        },
      });

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {
  jobs: [],
  isInitialRender: true,
  search: '',
  location: '',
  isFullTimeOnly: false,
  error: '',
  isModalShowing: false,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    toggleIsFullTimeOnly: (state, action) => {
      state.isFullTimeOnly = action.payload;
    },

    changeSearch: (state, action) => {
      state.search = action.payload;
    },

    changeLocation: (state, action) => {
      state.location = action.payload;
    },

    setJobs: (state, action) => {
      if (state.isInitialRender) {
        state.jobs = action.payload;
        state.isInitialRender = false;
      }
    },

    showModal: (state) => {
      state.isModalShowing = true;
    },

    hideModal: (state) => {
      state.isModalShowing = false;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchFilteredJobs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchFilteredJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMoreJobs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMoreJobs.fulfilled, (state, action) => {
        state.jobs = [...state.jobs, ...action.payload];
      })
      .addCase(fetchMoreJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  toggleIsFullTimeOnly,
  changeSearch,
  changeLocation,
  setJobs,
  showModal,
  hideModal,
} = jobSlice.actions;

export default jobSlice.reducer;
