import { NextApiRequest } from "next"

export interface CreateContactmeBodyModel extends NextApiRequest {
    body: {
        username: string
        email: string
        message: string
    }
}
