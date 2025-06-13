const initialState = {
  filters: {
    all: true,
    noStops: true,
    oneStop: true,
    twoStops: true,
    threeStops: false,
  },
}

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_FILTER': {
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
    }
    case 'SET_ALL_FILTERS': {
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
    default:
      return state
  }
}

export default filterReducer
