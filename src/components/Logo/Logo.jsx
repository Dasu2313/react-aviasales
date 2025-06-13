import React from 'react'
import styles from './Logo.module.scss'
import AviasalesLogo from './AviasalesLogo'

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <AviasalesLogo />
    </div>
  )
}

export default Logo
