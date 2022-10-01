export function numFormat(num: number): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }
  return num.toLocaleString('ru-RU', options)
}
