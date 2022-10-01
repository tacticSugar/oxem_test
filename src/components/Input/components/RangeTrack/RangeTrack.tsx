import { IRenderTrackParams } from 'react-range/lib/types'
import styles from './RangeTrack.module.scss'
import { getTrackBackground } from 'react-range'

type Attributes = {
  min: number
  value: number
  max: number
}

export function RangeTrack(
  { props, children }: IRenderTrackParams,
  { min, max, value }: Attributes
) {
  return (
    // <div {...props} className={styles.track}>
    //   {children}
    // </div>
    <div
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      className={styles.track}
    >
      <div
        ref={props.ref}
        style={{
          height: '2px',
          width: '100%',
          borderRadius: '50%',
          background: getTrackBackground({
            values: [value],
            colors: [styles.filled, styles.empty],
            min: min,
            max: max,
          }),
          alignSelf: 'center',
        }}
      >
        {children}
      </div>
    </div>
  )
}
