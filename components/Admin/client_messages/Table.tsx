import { PayloadAction } from "@reduxjs/toolkit"
import { ChangeEvent, FC, useCallback, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../client/store"
import { toggleCheckedClientMessage, selectClientMessages, selectPaginator, 
    getClientMessages } from "../../../client/store/adminPanelSlice"
import { useRouter } from 'next/router'
import { getQueryStringParamValue } from "../../../lib/parseQueryStringParam"
import { writeUrl } from "../../../lib/writeUrl"
import styles from './index.module.scss'

type Props = {
    setErrorText: (errorText: string) => void
}

export const Table: FC<Props> = ({ setErrorText }) => {
    const asPath = useRouter().asPath    
    // global state
    let { currentPage, pageSize } = useAppSelector(selectPaginator)
    const clientMessages = useAppSelector(selectClientMessages)
    
    // request to show messages
    const dispatch = useAppDispatch()

    useEffect(() => {
        // if query params are not defined in url then take them from redux store
        const queryPage = getQueryStringParamValue(asPath, 'page') ?? currentPage
        const queryCount = getQueryStringParamValue(asPath, 'count') ?? pageSize  
        writeUrl(String(queryPage), String(queryCount))
        dispatch(getClientMessages(queryPage, queryCount))
    }, [asPath, currentPage, pageSize, dispatch])

    // mark message read / unread
    const handleToggleChecked = useCallback(async (event: ChangeEvent<HTMLInputElement>, messageId: number,checked: boolean) => {
        const checkbox = event.currentTarget
        checkbox.disabled = true
        dispatch(toggleCheckedClientMessage(messageId, !checked))
            .then((data: string | PayloadAction<{messageId: number, checked: boolean}>) => {
                // if error come
                if (typeof data === 'string') setErrorText(data)
                checkbox.disabled = false
            })
    }, [dispatch, setErrorText])

    return (     
        <table className={styles.table}>
            <thead>
                <tr>
                    {['Username', 'Email', 'Message', 'Date of creaetion', 'Read/Unread', 'Mark as read'].map(colName => (
                        <th key={colName}>
                            { colName }
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                { clientMessages.map(message => (
                    <tr key={message.id}>
                        <td>{message.username}</td>
                        <td>{message.email}</td>
                        <td>{message.message}</td>
                        <td>{new Date(message.created_date).toDateString()}</td>
                        <td>{message.checked ? 'read' : 'unread'}</td>
                        <td>
                            <input 
                                className="input-checkbox"
                                type="checkbox" checked={message.checked}
                                onChange={(event) => handleToggleChecked(event, message.id, message.checked)}
                            />
                        </td>
                    </tr>
                )) }
            </tbody>            
        </table>
    )
}
