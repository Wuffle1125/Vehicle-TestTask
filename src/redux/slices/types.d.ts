type IOfferSliceState = {
  page: number
  offers: IOfferObject[]
  loading: boolean
}

type IDataSliceState = {
  endCursor: null | string
  offers: IOfferObject[]
  loading: boolean
}

interface IOfferObject {
  id: number
  brand: string
  model: string
  performance: number
  vehicle_history: {
    reg_date: string
  }
  drivetrain: {
    fuel: {
      type: string
    }
    consumption: {
      unit: string
      consumption_combined: number | null
    }
    transmission_type: string
    cc: number
  }
  im_price: {
    consumer_price_gross: number
  }
  media: {
    final: Array<{
      url: string
    }>
  }
  technical_features: {
    drive: string | null
  }
  vehicle_type: {
    condition: string
  }
  category: string
  color: string | null
}
