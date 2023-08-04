import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
  offers: [],
  loading: false,
} as IOfferSliceState

export const offer = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    reset: () => initialState,

    appendOffers: (
      state: IOfferSliceState,
      action: PayloadAction<IOfferObject[]>
    ) => {
      state.offers = [...state.offers, ...action.payload]
      return state
    },

    increasePage: (
      state: IOfferSliceState,
      action: PayloadAction<number | undefined>
    ) => {
      state.page += action.payload || 1
      return state
    },
  },
})

export const { reset, appendOffers, increasePage } = offer.actions
export default offer.reducer
