import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '25db9cb405c77623f4730d817d5c97ba';
const baseUrl = 'http://api.openweathermap.org/data/2.5/air_pollution?';
export const fetchDetails = createAsyncThunk('details/fetchDetails', async ({ lat, lon }) => {
  try {
    const response = await axios.get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
});
const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
    }));
  },
});

export default detailsSlice.reducer;
