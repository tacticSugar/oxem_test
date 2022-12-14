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
  const [priceAuto, setPriceAuto] = useState(1000000)
  const [firstPay, setFirstPay] = useState(100000)
  const [lisingPeriod, setLisingPeriod] = useState(60)
  const [isLoading, setIsLoading] = useState(false)

  function computeFirstPayMeta() {
    let resultFirstPay = Math.round((firstPay / priceAuto) * 100)
    if (resultFirstPay > 60) {
      resultFirstPay = 60
    }
    if (resultFirstPay < 10) {
      resultFirstPay = 10
    }
    return resultFirstPay
  }

  function computeFirstPayMin() {
    const resultFirstPayMin = Math.round(priceAuto * 0.1)
    return resultFirstPayMin
  }

  function computeFirstPayMax() {
    const resultFirstPayMax = Math.round(priceAuto * 0.6)
    return resultFirstPayMax
  }

  function handleChangePriceAuto(num: number) {
    if (firstPay < Math.round(num * 0.1)) {
      setFirstPay(priceAuto * 0.1)
    }
    if (firstPay > Math.round(num * 0.6)) {
      setFirstPay(priceAuto * 0.6)
    }
    setPriceAuto(num)
  }

  function computeMonthPay() {
    const monthPay =
      (priceAuto - firstPay) *
      ((0.035 * Math.pow(1 + 0.035, lisingPeriod)) /
        (Math.pow(1 + 0.035, lisingPeriod) - 1))
    return monthPay
  }

  function computeLising() {
    const lisingDoc = firstPay + lisingPeriod * computeMonthPay()
    return lisingDoc
  }

  async function handleButtonClick() {
    if (isLoading) return
    setIsLoading(true)
    const sendResult = await fetch('https://eoj3r7f3r4ef6v4.m.pipedream.net', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceAuto, firstPay, lisingPeriod }),
    })
    if (sendResult.ok) {
      console.log('??????!')
    }
    setIsLoading(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Heading>?????????????????????? ?????????????????? ???????????????????? ?? ????????????</Heading>
        </div>

        <div className={styles.inputsGrid}>
          <WithLabel label={'?????????????????? ????????????????????'}>
            <Input
              meta={'???'}
              value={priceAuto}
              step={5000}
              min={1000000}
              max={6000000}
              onChange={handleChangePriceAuto}
            />
          </WithLabel>

          <WithLabel label={'???????????????????????????? ??????????'}>
            <Input
              meta={`${computeFirstPayMeta()}%`}
              isMetaBox
              value={firstPay}
              step={500}
              min={computeFirstPayMin()}
              max={computeFirstPayMax()}
              onChange={setFirstPay}
            />
          </WithLabel>

          <WithLabel label={'???????? ??????????????'}>
            <Input
              meta={'??????.'}
              value={lisingPeriod}
              step={1}
              min={1}
              max={60}
              onChange={setLisingPeriod}
            />
          </WithLabel>
        </div>

        <div className={styles.resultGrid}>
          <WithLabel label={'?????????? ???????????????? ??????????????'}>
            <CalcResult result={computeLising()} />
          </WithLabel>

          <WithLabel label={'?????????????????????? ???????????? ????'}>
            <CalcResult result={computeMonthPay()} />
          </WithLabel>

          <Button
            disabled={!priceAuto || !firstPay}
            onClick={handleButtonClick}
            isLoading={isLoading}
          >
            ???????????????? ????????????
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
