import { QueryError } from 'mysql2'
import { NextApiResponse } from "next"
import { createClientMessage } from "../../lib/db/client-message"
import { ContactmeViewModel } from "../../types/models/ContactmeViewModel"
import { CreateContactmeBodyModel } from "../../types/models/CreateContactmeBodyModel"
import { body, validationResult} from 'express-validator'
import { validateInputData } from '../../lib/utils/contactme'

export default async function apiContactmeHandler(
    req: CreateContactmeBodyModel, 
    res: NextApiResponse<ContactmeViewModel>
) {
    const body = req.body
    
    switch (req.method) {
        case 'POST':
            if (!req.body.username || !req.body.email || !req.body.message) {
                return res.status(400).json({
                    message: 'Name, email address, and message cannot be empty',
                    data: []
                })
            }
            // validateInputData(body)
            // const errors = validationResult(req)    
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ 
            //         resultCode: 1,
            //         message: [errors.array()[0]["location"]?? '', errors.array()[0]["msg"], errors.array()[0]["param"] ],
            //         data: []
            //     })
            // }
            try {
                const newContactmeModel: ContactmeViewModel | QueryError = await createClientMessage(req.body)                
                return res.status(201).json(newContactmeModel as ContactmeViewModel);
            } catch (err) {
                return res.status(500).json({message: String(err), data: []})
            }
    }
}