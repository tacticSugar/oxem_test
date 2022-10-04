import classNames from 'classnames'
import styles from './Input.module.scss'
import { Range } from 'react-range'
import { RangeTrack } from './components/RangeTrack/RangeTrack'
import { RangeThumb } from './components/RangeThumb/RangeThumb'
import { numFormat } from '../../helpers/numFormat'
import { useEffect, useState } from 'react'

type Props = {
  meta: string
  isMetaBox?: boolean
  value: number
  step: number
  min: number
  max: number
  onChange: (num: number) => void
}

export function Input(props: Props) {
  const [value, setValue] = useState(props.value)
  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = event.target.value.replace(/\D/g, '')
    if (!rawValue) return
    const num = parseInt(rawValue)
    setValue(num)
  }

  function handleBlur() {
    if (value < props.min) {
      setValue(props.min)
      return props.onChange(props.min)
    }
    if (value > props.max) {
      setValue(props.max)
      return props.onChange(props.max)
    }
    return props.onChange(value)
  }

  function rangeChangeHandler(numArray: number[]) {
    setValue(numArray[0])
    props.onChange(numArray[0])
  }

  const metaStyle = classNames(styles.meta, {
    [styles.meta_box]: props.isMetaBox,
  })

  let rangeValue = value
  if (value > props.max) {
    rangeValue = props.max
  }
  if (value < props.min) {
    rangeValue = props.min
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={numFormat(value) || '0'}
        type="text"
        onChange={inputChangeHandler}
        onBlur={handleBlur}
      />
      <div className={metaStyle}>{props.meta}</div>
      <div className={styles.slider}>
        <Range
          step={props.step}
          min={props.min}
          max={props.max}
          values={[rangeValue]}
          onChange={rangeChangeHandler}
          renderTrack={(params) =>
            RangeTrack(params, {
              min: props.min,
              max: props.max,
              value,
            })
          }
          renderThumb={RangeThumb}
        />
      </div>
    </div>
  )
}
