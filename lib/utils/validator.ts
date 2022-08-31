import { BodyType } from "../types"
import{ body } from 'express-validator'

export const validateInputData = (body: BodyType) => {
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