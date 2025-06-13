import React from 'react'
import styles from './TabButton.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../../redux/actions/sortActions'

function TabButton({ sortByValue, label }) {
  const dispatch = useDispatch()
  const currentSortBy = useSelector((state) => state.sort.sortBy)
  const isActive = currentSortBy === sortByValue

  const handleClick = () => {
    dispatch(setSort(sortByValue))
  }

  return (
    <button
      className={`${styles.tabButton} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default TabButton
