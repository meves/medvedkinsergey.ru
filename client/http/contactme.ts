import { http_codes } from "../../lib/constants/http-codes"
import { ContactMeView } from "../../server/types/api/contactMe"
import { UserInput } from "../types"

export const receiveUserMessage = async (userInput: UserInput) => {
    const response = await fetch(`${process.env.url_api}/contactme`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userInput)
        }
    )
    if (response.status === http_codes.BAD_REQUEST_400) {
        const data: ContactMeView = await response.json()
        return data.errorMessage
    }
    if (response.status === http_codes.SERVER_ERROR_500) {
        const data: ContactMeView = await response.json()
        return data.errorMessage
    }
    if (response.status === http_codes.CREATED_201) {
        const data: ContactMeView = await response.json()
        return data.data
    }
}
