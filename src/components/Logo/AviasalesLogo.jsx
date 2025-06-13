import React from 'react'
import AviasalesLogoSrc from '../../assets/icons/aviasales_logo.svg'
import styles from './AviasalesLogo.module.scss'

function AviasalesLogo() {
  return (
    <div className={styles.aviasalesLogoContainer}>
      {}
      <img src={AviasalesLogoSrc} alt="Aviasales Logo" />
    </div>
  )
}

export default AviasalesLogo
