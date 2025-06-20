const initialState = {
  sortBy: 'cheapest'
}

function sortReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SORT':
      return { ...state, sortBy: action.payload }
    default:
      return state
  }
}

export default sortReducer
