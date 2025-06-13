import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './TicketList.module.scss'
import Ticket from '../Ticket/Ticket'
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'
import { fetchTickets } from '../../redux/actions/ticketsActions'
import {
  getFilteredAndSortedTickets,
  getTicketsLoadingStatus,
  getTicketsError,
  anyFilterSelected,
} from '../../redux/selectors'




function TicketList() {
  const dispatch = useDispatch()
  
  const filteredAndSortedTickets = useSelector(getFilteredAndSortedTickets)
  
  const loading = useSelector(getTicketsLoadingStatus)
  const error = useSelector(getTicketsError)
  
  const isAnyFilterSelected = useSelector(anyFilterSelected)
  
  const [ticketsToShowCount, setTicketsToShowCount] = useState(5)

  useEffect(() => {
    dispatch(fetchTickets()) 
  }, []) 

  
  if (error) {
    return <div>Ошибка загрузки билетов: {error}</div>
  }

  
  if (loading && filteredAndSortedTickets.length === 0) {
    return <div>Загрузка билетов...</div>
  }

  
  if (filteredAndSortedTickets.length === 0 && !loading && isAnyFilterSelected) {
    return (
      <div className={styles.noFlightsMessage}>
        Рейсов, подходящих под заданные фильтры, не найдено
      </div>
    )
  }

  
  const handleShowMore = () => {
    setTicketsToShowCount((prevCount) => prevCount + 5)
  }

  return (
    <div className={styles.ticketListContainer}>
      {
        
        filteredAndSortedTickets.slice(0, ticketsToShowCount).map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))
      }
      {}
      {filteredAndSortedTickets.length > ticketsToShowCount && (
        <ShowMoreButton onClick={handleShowMore} />
      )}

      {}
      {loading && filteredAndSortedTickets.length > ticketsToShowCount && (
        <div>Загрузка билетов...</div>
      )}
    </div>
  )
}

export default TicketList
