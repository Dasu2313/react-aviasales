
export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST'
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS'
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE'


export const fetchTicketsRequest = () => ({ type: FETCH_TICKETS_REQUEST })
export const fetchTicketsSuccess = (tickets) => ({ type: FETCH_TICKETS_SUCCESS, payload: tickets })
export const fetchTicketsFailure = (error) => ({ type: FETCH_TICKETS_FAILURE, payload: error })


export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch(fetchTicketsRequest())
    try {
      
      const searchIdResponse = await fetch('https://aviasales-test-api.kata.academy/search')
      if (!searchIdResponse.ok) {
        throw new Error(`Failed to get searchId: ${searchIdResponse.statusText}`)
      }
      const { searchId } = await searchIdResponse.json()

      
      let tickets = []
      let stopFetching = false

      while (!stopFetching) {
        const ticketsResponse = await fetch(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
        )
        if (!ticketsResponse.ok) {
          
          if (ticketsResponse.status === 500) {
            continue 
          } else {
            throw new Error(`Failed to fetch tickets: ${ticketsResponse.statusText}`)
          }
        }

        const data = await ticketsResponse.json()

        tickets = [...tickets, ...data.tickets]

        if (data.stop) {
          stopFetching = true
        }
      }

      dispatch(fetchTicketsSuccess(tickets))
    } catch (error) {
      dispatch(fetchTicketsFailure(error.message))
    }
  }
}
