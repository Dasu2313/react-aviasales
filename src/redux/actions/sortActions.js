import { createSlice } from "@reduxjs/toolkit"

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    sortBy: 'cheapest'
  },
  reducers: {
    setSort: (state, action) => {
      return { ...state, sortBy: action.payload }
    }
  }
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;