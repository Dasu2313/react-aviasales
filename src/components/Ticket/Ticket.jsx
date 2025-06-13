import React from 'react'
import styles from './Ticket.module.scss'
import TicketSegment from '../TicketSegment/TicketSegment'

function Ticket({ ticket }) {
  const carrierIataCode = ticket.carrier
  const carrierLogoUrl = `//pics.avs.io/99/36/${carrierIataCode}.png`

  return (
    <div className={styles.ticketContainer}>
      <div className={styles.ticketHeader}>
        <span className={styles.ticketPrice}>{ticket.price} Р</span>
        <img src={carrierLogoUrl} alt={`${carrierIataCode} Logo`} className={styles.carrierLogo} />
      </div>
      <div className={styles.ticketSegments}>
        {ticket.segments.map((segment, index) => (
          <TicketSegment key={index} segment={segment} />
        ))}
      </div>
    </div>
  )
}

export default Ticket
