interface IFilter {
  model?: string
  brand?: string
  fuel?: string
  color?: string
  category?: string
  from_power?: number
  to_power?: number
  from_price?: number
  to_price?: number
}

type IFilterKey = keyof IFilter
