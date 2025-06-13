import React from 'react'
import styles from './FilterCheckbox.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFilter } from '../../redux/actions/filterActions'

function FilterCheckbox({ filterName, label }) {
  const dispatch = useDispatch()
  const isChecked = useSelector((state) => state.filter.filters[filterName])

  const handleToggle = () => {
    dispatch(toggleFilter(filterName))
  }

  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        className={styles.hiddenCheckbox}
        checked={isChecked}
        onChange={handleToggle}
      />
      <div className={`${styles.checkboxForm} ${isChecked ? styles.checked : ''}`}>
        {isChecked && (
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
              fill="#2196F3"
            />
          </svg>
        )}{' '}
        {}
      </div>
      <span className={styles.labelText}>{label}</span>
    </label>
  )
}

export default FilterCheckbox
