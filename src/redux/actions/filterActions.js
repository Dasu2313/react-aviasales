import { createSlice } from "@reduxjs/toolkit"

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      all: true,
      noStops: true,
      oneStop: true,
      twoStops: true,
      threeStops: false
    }
  },
  reducers: {
    toggleFilter: (state, action) => {
      const newFilters = { ...state.filters }
      const filterName = action.payload

      if (filterName === 'all') {
        const isChecked = !state.filters.all
        newFilters.all = isChecked
        newFilters.noStops = isChecked
        newFilters.oneStop = isChecked
        newFilters.twoStops = isChecked
        newFilters.threeStops = isChecked
      } else {
        newFilters[filterName] = !newFilters[filterName]

        
        const allOtherFiltersChecked =
          newFilters.noStops && newFilters.oneStop && newFilters.twoStops && newFilters.threeStops
        if (newFilters.all && !newFilters[filterName]) {
          newFilters.all = false
        } else if (!newFilters.all && allOtherFiltersChecked) {
          newFilters.all = true
        }
      }

      return { ...state, filters: newFilters }
    },
    setAllFilters: (state, action) => {
      const setAllChecked = action.payload
      return {
        ...state,
        filters: {
          all: setAllChecked,
          noStops: setAllChecked,
          oneStop: setAllChecked,
          twoStops: setAllChecked,
          threeStops: setAllChecked,
        },
      }
    }
  }
});

export const { toggleFilter, setAllFilters, getFilterValue } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectFilter = (filterName) => (state) => state.filter.filters[filterName];