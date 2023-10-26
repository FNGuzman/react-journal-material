import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
//fuente central de datos de la aplicación
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})