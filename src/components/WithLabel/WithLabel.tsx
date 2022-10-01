import React from 'react'
import styles from './WithLabel.module.scss'

type Props = {
  children: React.ReactNode
  label: string
}

export function WithLabel(props: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{props.label}</div>
      {props.children}
    </div>
  )
}
