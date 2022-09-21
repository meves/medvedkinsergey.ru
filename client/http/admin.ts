import { url_api } from "."
import { ClientMessagesView, ClientMessageView } from "../../server/types/api/admin"

export const receiveClientMessages = async (page: number, count: number) => {
    const response = await fetch(`${url_api}/admin/client-messages?page=${page}&count=${count}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    const data: ClientMessagesView = await response.json()
    return data
}

export const updateClientMessageChecked = async (id: number, checked: boolean) => {
    const response = await fetch(`${url_api}/admin/client-messages`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id, checked}),
    })
    const data: ClientMessageView = await response.json()
    return data
}