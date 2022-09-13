import { NextApiResponse } from "next"
import { ContactMeView } from "../../../server/types/api/contactMe"
import { CreateContactMeBody } from "../../../server/types/api/contactMe"
import { contactMeController } from '../../../server/controllers/contactMeController'

export default async function apiContactMeHandler(
    req: CreateContactMeBody, 
    res: NextApiResponse<ContactMeView>
) {    
    if (req.method === 'POST') {        
        const { status, resultData } = await contactMeController.create(req.body)
        return res.status(status).json(resultData)
    }
}