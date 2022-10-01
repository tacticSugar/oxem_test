import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

type Props = {
  children: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
}

export function Button(props: Props) {
  const buttonStyles = classNames(styles.button, {
    [styles.button_width_full]: props.fullWidth,
  })
  return (
    <button className={buttonStyles} disabled={props.disabled}>
      {props.children}
    </button>
  )
}
