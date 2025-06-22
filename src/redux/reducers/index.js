import { combineReducers } from 'redux'
import sortReducer from '../actions/sortActions'
import ticketsReducer from '../actions/ticketsActions'
import filtersReducer from '../actions/filterActions'

const rootReducer = combineReducers({
  filter: filtersReducer,
  sort: sortReducer,
  tickets: ticketsReducer,
})

export default rootReducer
