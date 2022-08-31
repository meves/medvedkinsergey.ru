import { http_codes } from "../constants/http-codes"
import { ContactmeViewModel } from "../types/models/ContactmeViewModel"
import { UserInput, UserMessage } from "../types"

export const createUserMessage = async (userInput: UserInput): Promise<UserMessage | string | undefined> => {
    const response = await fetch(
        `${process.env.url_api}/contactme`, 
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userInput)
        })
    if (response.status === http_codes.BAD_REQUEST) {
        const data: ContactmeViewModel = await response.json()
        return data.message
    }
    if (response.status === http_codes.SERVER_ERROR) {
        await response.json()
        return 'Something went wrong. Try again later.'
    }
    if (response.status === http_codes.CREATED) {
        const data: ContactmeViewModel = await response.json()
        return data.data[0]
    }
}