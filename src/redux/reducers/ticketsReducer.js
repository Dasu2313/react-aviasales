const initialState = {
  tickets: [],
  loading: false,
  error: null,
}

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return { ...state, loading: true, error: null }
    case 'FETCH_TICKETS_SUCCESS':
      return { ...state, loading: false, tickets: action.payload }
    case 'FETCH_TICKETS_FAILURE':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default ticketsReducer
