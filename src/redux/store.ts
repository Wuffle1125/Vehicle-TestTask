import { configureStore } from '@reduxjs/toolkit'

import offerSlice from './slices/offerSlice'

export const store = configureStore({
  reducer: { offer: offerSlice },

  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
