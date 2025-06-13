import styles from './Tabs.module.scss'
import TabButton from '../TabButton/TabButton'

function Tabs() {
  
  const tabs = [
    { label: 'Самый дешевый', sortByValue: 'cheapest' },
    { label: 'Самый быстрый', sortByValue: 'fastest' },
    { label: 'Оптимальный', sortByValue: 'optimal' },
  ]

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <TabButton key={tab.sortByValue} label={tab.label} sortByValue={tab.sortByValue} />
      ))}
    </div>
  )
}

export default Tabs
