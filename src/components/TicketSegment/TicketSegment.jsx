import React from 'react'
import styles from './TicketSegment.module.scss'
import { format, addMinutes } from 'date-fns'

function TicketSegment({ segment }) {
  
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}ч ${remainingMinutes}м`
  }

  
  const formatTimeRange = (date, duration) => {
    const startTime = new Date(date)
    const endTime = addMinutes(startTime, duration)
    
    const startTimeFormatted = format(startTime, 'HH:mm')
    const endTimeFormatted = format(endTime, 'HH:mm')
    return `${startTimeFormatted} – ${endTimeFormatted}`
  }

  const stopCount = segment.stops.length
  const stopsText =
    stopCount === 0
      ? 'Без пересадок'
      : `${stopCount} пересадк${stopCount === 1 ? 'а' : stopCount >= 2 && stopCount <= 4 ? 'и' : 'ок'}`
  const stopsList = segment.stops.join(', ')

  return (
    <div className={styles.ticketSegmentContainer}>
      <div className={styles.segmentInfo}>
        <span className={styles.segmentLabel}>{`${segment.origin} – ${segment.destination}`}</span>
        <span className={styles.segmentValue}>
          {formatTimeRange(segment.date, segment.duration)}
        </span>
      </div>
      <div className={styles.segmentInfo}>
        <span className={styles.segmentLabel}>В пути</span>
        <span className={styles.segmentValue}>{formatDuration(segment.duration)}</span>
      </div>
      <div className={styles.segmentInfo}>
        <span className={styles.segmentLabel}>{stopsText}</span>
        <span className={styles.segmentValue}>{stopsList}</span>
      </div>
    </div>
  )
}

export default TicketSegment
