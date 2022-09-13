import { NextApiRequest } from "next"

export type ContactMeBody = {
    username: string
    email: string
    message: string
}

export interface CreateContactMeBody extends NextApiRequest {
    body: ContactMeBody 
}

export type ContactMeView = {
    errorMessage: string
    data: {
        username: string
        email: string
    }
}

// example
const data: ContactMeView = {
    errorMessage: '',
    data: { username: 'Sergey', email: 'meves.sergey@gmail.com' }
}
