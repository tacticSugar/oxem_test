import React from 'react'
import { numFormat } from '../../helpers/numFormat'
import styles from './CalcResult.module.scss'

type Props = {
  result: number
}
export function CalcResult(props: Props) {
  return <div className={styles.result}>{numFormat(props.result, true)}</div>
}
