export function numFormat(num: number, isCurrency?: boolean): string {
  const options: Intl.NumberFormatOptions = {
    style: isCurrency ? 'currency' : undefined,
    currency: 'RUB',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }
  return num.toLocaleString('ru-RU', options)
}
