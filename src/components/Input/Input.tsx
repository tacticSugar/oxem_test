import classNames from 'classnames'
import styles from './Input.module.scss'
import { Range } from 'react-range'

type Props = {
  meta: string
  isMetaBox?: boolean
  value: number
}

export function Input(props: Props) {
  const metaStyle = classNames(styles.meta, {
    [styles.meta_box]: props.isMetaBox,
  })

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={props.value.toString() || '0'}
        type="text"
      />
      <div className={metaStyle}>{props.meta}</div>
      <Range></Range>
    </div>
  )
}
