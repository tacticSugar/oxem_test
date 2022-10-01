import React from 'react'
import styles from './Heading.module.scss'

type Props = {
  children: React.ReactNode
}

export function Heading(props: Props) {
  return <h1 className={styles.h1}>{props.children}</h1>
}
