
export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const SET_ALL_FILTERS = 'SET_ALL_FILTERS'


export const toggleFilter = (filterName) => ({
  type: TOGGLE_FILTER,
  payload: filterName,
})

export const setAllFilters = (isChecked) => ({
  type: SET_ALL_FILTERS,
  payload: isChecked,
})
