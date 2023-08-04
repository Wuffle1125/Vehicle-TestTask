'use client'

import { useSearchParams } from 'next/navigation'

export default function useURLParams() {
  const searchParam = useSearchParams()

  const brand = searchParam.get('brand') || undefined
  const model = searchParam.get('model') || undefined
  const fuel = searchParam.get('fuel') || undefined
  const color = searchParam?.get('color')?.toUpperCase() || undefined
  const category = searchParam.get('category')?.toUpperCase() || undefined
  const registration =
    searchParam.get('registration')?.split('-').reverse()?.join('.') ||
    undefined
  const from_power = Number(searchParam.get('from_power')) || undefined
  const to_power = Number(searchParam.get('to_power')) || undefined
  const from_price = Number(searchParam.get('form_price')) || undefined
  const to_price = Number(searchParam.get('to_price')) || undefined

  return {
    brand,
    model,
    fuel,
    color,
    category,
    registration,
    from_power,
    to_power,
    from_price,
    to_price,
    searchParam: searchParam.toString(),
  }
}
