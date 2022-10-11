import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import homePageReducer from './homePageSlice'
import adminPanelReducer from './adminPanelSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        homePage: homePageReducer,
        adminPanel: adminPanelReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
