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
  const [isLoading, setIsLoading] = useState(false)

  async function handleButtonClick() {
    if (isLoading) return
    setIsLoading(true)
    const sendResult = await fetch('https://eoj3r7f3r4ef6v4.m.pipedream.net', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceAuto, firstPay, lisingPeriod }),
    })
    if (sendResult.ok) {
      console.log('Ура!')
    }
    setIsLoading(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Heading>Рассчитайте стоимость автомобиля в лизинг</Heading>
        </div>

        <div className={styles.inputsGrid}>
          <WithLabel label={'Стоимость автомобиля'}>
            <Input
              meta={'₽'}
              value={priceAuto}
              step={1000}
              min={0}
              max={6000000}
              onChange={setPriceAuto}
            />
          </WithLabel>

          <WithLabel label={'Первоначальный взнос'}>
            <Input
              meta={'13%'}
              isMetaBox
              value={firstPay}
              step={100}
              min={0}
              max={3000000}
              onChange={setFirstPay}
            />
          </WithLabel>

          <WithLabel label={'Срок лизинга'}>
            <Input
              meta={'мес.'}
              value={lisingPeriod}
              step={1}
              min={1}
              max={60}
              onChange={setLisingPeriod}
            />
          </WithLabel>
        </div>

        <div className={styles.resultGrid}>
          <WithLabel label={'Сумма договора лизинга'}>
            <CalcResult result={priceAuto * 2} />
          </WithLabel>

          <WithLabel label={'Сумма договора лизинга'}>
            <CalcResult result={priceAuto * 2} />
          </WithLabel>

          <Button
            disabled={!priceAuto || !firstPay}
            onClick={handleButtonClick}
            isLoading={isLoading}
          >
            Оставить заявку
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
