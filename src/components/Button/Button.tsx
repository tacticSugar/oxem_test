import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import { Loader } from './Loader'

type Props = JSX.IntrinsicElements['button'] & {
  fullWidth?: boolean
  isLoading?: boolean
}

export function Button(props: Props) {
  const { isLoading, fullWidth, ...buttonProps } = props

  const buttonStyles = classNames(styles.button, {
    [styles.button_width_full]: fullWidth,
  })
  return (
    <button className={buttonStyles} {...buttonProps}>
      {isLoading ? <Loader /> : props.children}
    </button>
  )
}
