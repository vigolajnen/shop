import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  city: string;
  clubs: any[];
  filters: string[];
  filterActive: any;
  filterActiveIndex: number;
  filterTariffsActive: any[];
}

const initialState: IInitialState = {
  city: '',
  clubs: [],
  filters: [],
  filterActive: 'с бассейном',
  filterActiveIndex: 1,
  filterTariffsActive: [],
};

const citySlice = createSlice({
  name: 'cityTariffs',
  initialState: initialState,
  reducers: {
    getCity(state, action) {
      console.log(action.payload);
      state.city = action.payload;
    },
    getCityClubs(state, action) {
      console.log(action.payload?.clubs);
      state.clubs.push(action.payload?.clubs);
    },
    getFilterTariffs(state, action) {},
    getFilterActive(state, action) {
      state.filterActiveIndex = action.payload;
    },
    getFilterTariffsActive(state, action) {},
  },
});

export const {
  getCity,
  getCityClubs,
  getFilterTariffs,
  getFilterActive,
  getFilterTariffsActive,
} = citySlice.actions;

export default citySlice.reducer;
