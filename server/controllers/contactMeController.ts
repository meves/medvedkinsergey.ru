import { NextApiResponse } from "next";
import { QueryError } from "mysql2";
import { createClientMessageModel } from "../db/client-message";
import { ContactMeBody, ContactMeView } from "../types/api/contactMe";
import { contactMeBodyValidator } from "../validators/contactMe";
import { ClientMessageModel } from "../types/models/ClientMessageModel";
import { http_codes } from "../../lib/constants/http-codes";


export const contactMeController = {
    
    create: async function(body: ContactMeBody) {
        if (!contactMeBodyValidator(body)) {
            return {status: http_codes.BAD_REQUEST_400,
                    resultData: {
                        errorMessage: 'Name, email address, and message cannot be empty',
                        data: { username: '', email: '' }
                    }
                }            
        }
        try {
            const result: ClientMessageModel | QueryError = await createClientMessageModel(body)  
            const contactMeData = result as ClientMessageModel
            return {status: http_codes.CREATED_201,
                    resultData: {
                        errorMessage: '',
                        data: {
                            username: contactMeData.username, email: contactMeData.email
                    }
                }
            }
        } catch (err) {
            return {status: http_codes.SERVER_ERROR_500,
                    resultData: {
                        errorMessage: 'Something went wrong. Try again later', 
                        data: { username: '', email: '' }
                    }
                }
        }
    },
}
