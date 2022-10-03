import { IRenderThumbParams } from 'react-range/lib/types'
import styles from './RangeThumb.module.scss'

export function RangeThumb({ props }: IRenderThumbParams) {
  return <div {...props} className={styles.thumb} />
}
