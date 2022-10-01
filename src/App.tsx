import React, { useState } from 'react'

import './assets/fonts/fonts.scss'
import 'scss-reset/_reset.scss'

import styles from './App.module.scss'

import { Heading } from './components/Heading/Heading'
import { Button } from './components/Button/Button'
import { CalcResult } from './components/CalcResult/CalcResult'
import { WithLabel } from './components/WithLabel/WithLabel'
import { Input } from './components/Input/Input'

function App() {
  const [priceAuto, setPriceAuto] = useState(0)
  const [firstPay, setFirstPay] = useState(0)
  const [lisingPeriod, setLisingPeriod] = useState(60)

  return (
    <div className={styles.container}>
      <Heading>Рассчитайте стоимость автомобиля в лизинг</Heading>
      <Button>Оставить заявку</Button>
      <WithLabel label={'Сумма договора лизинга'}>
        <CalcResult result={priceAuto * 2} />
      </WithLabel>
      <WithLabel label={'Стоимость автомобиля'}>
        <Input
          meta={'1'}
          value={priceAuto}
          step={1000}
          min={0}
          max={6000000}
          onChange={setPriceAuto}
        />
      </WithLabel>
      <WithLabel label={'Первоначальный взнос'}>
        <Input
          meta={'3'}
          value={firstPay}
          step={100}
          min={0}
          max={3000000}
          onChange={setFirstPay}
        />
      </WithLabel>
      <WithLabel label={'Срок лизинга'}>
        <Input
          meta={'2'}
          value={lisingPeriod}
          isMetaBox
          step={1}
          min={1}
          max={60}
          onChange={setLisingPeriod}
        />
      </WithLabel>
    </div>
  )
}

export default App
