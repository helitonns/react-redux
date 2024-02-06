import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const slice = createSlice({
  name: "products",
  initialState: {
    data,
    filters: {
      colors: [],
      prices: {
        max:0,
        min: 0
      }
    }
  },
  reducers: {
    changesFilters(state, action){
      state.filters[action.payload.name] = action.payload.value;
    }
  }
});

export const {changesFilters} = slice.actions;

export default slice.reducer;

export const selectUniqueColors = ({products}) => 
Array.from(new Set(products.data.map(({color}) => color)));

