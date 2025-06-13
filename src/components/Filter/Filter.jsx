import React from 'react'
import styles from './Filter.module.scss'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function Filter() {
  const filters = [
    { filterName: 'all', label: 'Все' },
    { filterName: 'noStops', label: 'Без пересадок' },
    { filterName: 'oneStop', label: '1 пересадка' },
    { filterName: 'twoStops', label: '2 пересадки' }, 
    { filterName: 'threeStops', label: '3 пересадки' },
  ]

  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.filterTitle}>Количество пересадок</h2>
      {filters.map((filter) => (
        <FilterCheckbox
          key={filter.filterName}
          filterName={filter.filterName}
          label={filter.label}
        />
      ))}
    </div>
  )
}

export default Filter
