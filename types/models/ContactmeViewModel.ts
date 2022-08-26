import { UserMessage } from ".."

export type ContactmeViewModel = {
    message: string
    data: UserMessage[]
}

// example
const data: ContactmeViewModel = {
    message: '',
    data: [
        { id: 1, username: 'Sergey', email: 'meves.sergey@gmail.com', message: 'Hello' }
    ]
}