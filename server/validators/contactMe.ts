import { BodyType, UserInput } from "../../client/types"
import { body, validationResult} from 'express-validator'


export const contactMeBodyValidator = (userInputBody: UserInput) => {
    const { username, email, message } = userInputBody
    if (!username || !email || !message) {
        return false            
    }
    return true
}

export const validateInputData = (body: BodyType) => {
    // validateInputData(body)
    // const errors = validationResult(req)    
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ 
    //         resultCode: 1,
    //         message: [errors.array()[0]["location"]?? '', errors.array()[0]["msg"], errors.array()[0]["param"] ],
    //         data: []
    //     })
    // }
    body('name')
        .notEmpty().withMessage('name must not be empty')
        .isLength({max: 50}).withMessage( 'name must not be more than 50 characters')
        .trim().escape()
    body('email')
        .notEmpty().withMessage('email must not be empty')
        .isEmail().withMessage('email has to be correct')
        .normalizeEmail()
    body('message')
        .notEmpty().withMessage('message must not be empty')
        .isLength({max: 300}).withMessage('message must not be more than 300 characters')
        .trim().escape()
}