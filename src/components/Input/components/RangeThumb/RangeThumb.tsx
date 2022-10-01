import classNames from 'classnames'
import { IRenderThumbParams } from 'react-range/lib/types'
import styles from './RangeThumb.module.scss'

export function RangeThumb({ props }: IRenderThumbParams) {
  // const rangeThumbStyle = classNames()
  return <div {...props} className={styles.thumb} />
}
