import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "."
import { AuthStatus, Session } from "../types/auth"

// Define a type for the slice state
interface AuthState {
    authStatus: AuthStatus
    session: Session | null
}
// Define the initial state using that type
const initialState: AuthState = {
    authStatus: "unauthenticated",
    session: null
}
// create slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus: (state: AuthState, action: PayloadAction<AuthStatus>) => {
            state.authStatus = action.payload
        },
        setSession: (state: AuthState, action: PayloadAction<Session | null>) => {
            state.session = action.payload
        }
    }
})
// export actions
export const { setAuthStatus, setSession } = authSlice.actions
// other code
// selectors
export const selectAuthStatus = (state: RootState) => state.auth.authStatus
export const selectSessionData = (state: RootState) => state.auth.session

// thunk
export const auth = (authStatus: AuthStatus, session: Session | null) => 
    async (dispatch: AppDispatch) => {
        dispatch(setAuthStatus(authStatus))
        dispatch(setSession(session))
    }

// export reducer
export default authSlice.reducer
