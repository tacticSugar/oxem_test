import React from 'react'

import './assets/fonts/fonts.scss'
import 'scss-reset/_reset.scss'

import styles from './App.module.scss'

import { Heading } from './components/Heading/Heading'
import { Button } from './components/Button/Button'
import { CalcResult } from './components/CalcResult/CalcResult'
import { WithLabel } from './components/WithLabel/WithLabel'
import { Input } from './components/Input/Input'

function App() {
  return (
    <div className={styles.container}>
      <Heading>Рассчитайте стоимость автомобиля в лизинг</Heading>
      <Button>Оставить заявку</Button>
      <WithLabel label={'Сумма договора лизинга'}>
        <CalcResult result={1234332} />
      </WithLabel>
      <WithLabel label={'Стоимость автомобиля'}>
        <Input meta={'1'} value={3000000} />
      </WithLabel>
      <WithLabel label={'Первоначальный взнос'}>
        <Input meta={'3'} value={420000} />
      </WithLabel>
      <WithLabel label={'Срок лизинга'}>
        <Input meta={'2'} value={60} isMetaBox />
      </WithLabel>
    </div>
  )
}

export default App
