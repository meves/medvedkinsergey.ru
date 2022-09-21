import { UserInput } from "../../client/types"

export const contactMeBodyValidator = (userInputBody: UserInput) => {
    const { username, email, message } = userInputBody
    if (!username || !email || !message) {
        return false            
    }
    return true
}
