import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "."
import { receiveClientMessages, updateClientMessageChecked } from "../http/admin"
import { ClientMessage, Paginator } from "../types/adminPanel"

// Define a type for the slice state
interface AdminPanelState {
    clientMessages: ClientMessage[]
    paginator: Paginator
}
// Define the initial state using that type
const initialState: AdminPanelState = {
    clientMessages: [],
    paginator: {
        currentPage: 1,
        pageSize: 5,
        totalCount: 0,
        blockSize: 10
    }
}
// create slice for Admin Panel
export const adminPanelSlice = createSlice({
    name: 'adminPanel',
    initialState,
    reducers: {
        setClientMessages: (state: AdminPanelState, action: PayloadAction<ClientMessage[]>) => {
            state.clientMessages = action.payload
        },
        setCheckedOfClientMessage: (state: AdminPanelState, action: PayloadAction<{messageId: number, checked: boolean}>) => {
            state.clientMessages.forEach((message) => {
                if (message.id === action.payload.messageId) message.checked = action.payload.checked
            })
        },
        setPaginatorPage: (state: AdminPanelState, action: PayloadAction<number>) => {
            state.paginator.currentPage = action.payload
        },
        setPaginatorCount: (state: AdminPanelState, action: PayloadAction<number>) => {
            state.paginator.pageSize = action.payload
        },
        setPaginatorTotalCount: (state: AdminPanelState, action: PayloadAction<number>) => {
            state.paginator.totalCount = action.payload
        }
    }
})
// export actions
export const { setClientMessages, setCheckedOfClientMessage,
    setPaginatorCount, setPaginatorPage, setPaginatorTotalCount 
            } = adminPanelSlice.actions

// other code
// selectors
export const selectClientMessages = (state: RootState) => state.adminPanel.clientMessages
export const selectPaginator = (state: RootState) => state.adminPanel.paginator

// thunk
export const getClientMessages = (page: number, count: number) => 
    async (dispatch: AppDispatch) => {
        const { data, totalCount } = await receiveClientMessages(page, count)
        dispatch(setClientMessages(data))
        dispatch(setPaginatorPage(page))
        dispatch(setPaginatorCount(count))
        dispatch(setPaginatorTotalCount(totalCount))
    }

export const toggleCheckedClientMessage = (messageId: number, checked: boolean) => 
    async (dispatch: AppDispatch) => {
        const clientMessage = await updateClientMessageChecked(messageId, checked)
        if (clientMessage.errorMessage === '') {
            return dispatch(setCheckedOfClientMessage({ messageId, checked}))
        } else {
            return clientMessage.errorMessage
        }
    }      

// export reducer
export default adminPanelSlice.reducer
