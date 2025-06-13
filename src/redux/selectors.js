import { createSelector } from 'reselect'


const getTickets = (state) => state.tickets.tickets
const getFilters = (state) => state.filter.filters
const getSortBy = (state) => state.sort.sortBy
const getLoadingStatus = (state) => state.tickets.loading


const getFilteredTickets = createSelector([getTickets, getFilters], (tickets, filters) => {
  
  if (filters.all) {
    return tickets
  }

  
  const otherFiltersChecked = Object.keys(filters).some((key) => key !== 'all' && filters[key])

  
  if (!filters.all && !otherFiltersChecked) {
    return []
  }

  
  return tickets.filter((ticket) => {
    
    return ticket.segments.some((segment) => {
      const stopCount = segment.stops.length

      if (filters.noStops && stopCount === 0) {
        return true
      }
      if (filters.oneStop && stopCount === 1) {
        return true
      }
      if (filters.twoStops && stopCount === 2) {
        return true
      }
      
      if (filters.threeStops && stopCount >= 3) {
        return true
      }
      return false
    })
  })
})


export const getFilteredAndSortedTickets = createSelector(
  [getFilteredTickets, getSortBy],
  (tickets, sortBy) => {
    
    const sortedTickets = [...tickets]

    switch (sortBy) {
      case 'cheapest':
        
        return sortedTickets.sort((a, b) => {
          return a.price - b.price
        })
      case 'fastest':
        
        return sortedTickets.sort((a, b) => {
          const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0)
          const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0)
          return durationA - durationB
        })
      case 'optimal':
        
        
        return sortedTickets.sort((a, b) => {
          const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0)
          const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0)
          return durationA - durationB
        })
      default:
        return sortedTickets 
    }
  }
)


export const getTicketsLoadingStatus = createSelector([getLoadingStatus], (loading) => loading)


export const getTicketsError = createSelector([(state) => state.tickets.error], (error) => error)


export const anyFilterSelected = createSelector([getFilters], (filters) =>
  Object.keys(filters).some((key) => filters[key])
)
