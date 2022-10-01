import React from 'react'
import styles from './CalcResult.module.scss'

type Props = {
  result: number
}

export function CalcResult(props: Props) {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }

  const resultString = props.result.toLocaleString('ru-RU', options)

  return <div className={styles.result}>{resultString}</div>
}
