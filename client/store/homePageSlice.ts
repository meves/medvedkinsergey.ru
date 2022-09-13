import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppDispatch } from '.'
import { receiveUserMessage } from '../http/contactme'
import { UserInput, UserMessage } from '../types'

// Define a type for the slice state
interface HomePageState {
    contactMeMessage: string
}
// Define the initial state using that type
const initialState: HomePageState = {
    contactMeMessage: '' 
}
// create slice for Home Page
export const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setContactMeMessage: (state: HomePageState, action: PayloadAction<string>) => {
            state.contactMeMessage = action.payload
        }
    }
})
// export actions
export const { setContactMeMessage } = homePageSlice.actions

// other code
// selectors
export const selectContactMeMessage = (state: RootState) => state.homePage.contactMeMessage

// thunk
export const sendUserMessage = (userInput: UserInput) => async (dispatch: AppDispatch) => {
    const userMessage: UserMessage = await receiveUserMessage(userInput)
    if (!!userMessage && typeof userMessage !== 'string') {
        dispatch(setContactMeMessage(
            `${userMessage.username}, your message has been added.\n
            You are getting the answer to your email ${userMessage.email} later`
            )
        )
    }
    if (!!userMessage && typeof userMessage === 'string') {
        dispatch(setContactMeMessage(userMessage)) 
    }  
}

// export reducer
export default homePageSlice.reducer