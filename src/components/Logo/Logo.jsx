import React from 'react'
import styles from './Logo.module.scss'
import AviasalesLogoSrc from '../../assets/icons/aviasales_logo.svg'

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.aviasalesLogoContainer}>
            <img src={AviasalesLogoSrc} alt="Aviasales Logo" />
          </div>
    </div>
  )
}

export default Logo
