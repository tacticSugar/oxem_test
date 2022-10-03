import classNames from 'classnames'
import styles from './Input.module.scss'
import { Range } from 'react-range'
import { RangeTrack } from './components/RangeTrack/RangeTrack'
import { RangeThumb } from './components/RangeThumb/RangeThumb'
import React, { useState } from 'react'
import { numFormat } from '../../helpers/numFormat'

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
  const value = props.value

  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = event.target.value.replace(/\D/g, '')
    if (!rawValue) return
    const num = parseInt(rawValue)
    if (num <= props.min) return
    if (num > props.max) return
    props.onChange(num)
  }

  function rangeChangeHandler(numArray: number[]) {
    props.onChange(numArray[0])
  }

  const metaStyle = classNames(styles.meta, {
    [styles.meta_box]: props.isMetaBox,
  })

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={numFormat(value) || '0'}
        type="text"
        onChange={inputChangeHandler}
      />
      <div className={metaStyle}>{props.meta}</div>
      <div className={styles.slider}>
        <Range
          step={props.step}
          min={props.min}
          max={props.max}
          values={[value]}
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
