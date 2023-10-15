import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_DATA_URL } from '../../api/constants';

const initialState = {
  cities: [
    {
      city: '111',
    }
  ],
};

export const getCities = createAsyncThunk(
  'cities/getCities',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`${GET_DATA_URL}`);
    dispatch(setCities(res));
  },
);

export const citiesSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCities: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: {
    [getCities.fulfilled]: () => console.log('fulfilled'),
    [getCities.pending]: () => console.log('pending'),
    [getCities.rejected]: () => console.log('rejected'),
  },
});

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer;
