import { QueryError, RowDataPacket } from "mysql2";
import { http_codes } from "../../lib/constants/http-codes";
import { getAllClientMessagesModel, getTotalCountMessagesModel, updateClientMessageModel } from "../db/client-message";
import { NextApiRequestWithBody, NextApiRequestWithQuery } from "../types/api/admin";
import { ClientMessageModel } from "../types/models/ClientMessageModel";

export const adminController = {

    getAll: async function(req: NextApiRequestWithQuery) {
        try {
            let result: RowDataPacket[] | QueryError = await getAllClientMessagesModel(+req.query.page, +req.query.count)
            const data: ClientMessageModel[] = JSON.parse(JSON.stringify(result as RowDataPacket[]))
            result = await getTotalCountMessagesModel()
            const totalCount: number = JSON.parse(JSON.stringify(result))[0]['totalCount']
            return {status: http_codes.SUCCESS_200, 
                    resultData: {
                        errorMessage: '',
                        data,
                        totalCount
                    }}
        } catch (err) {
            return {status: http_codes.SERVER_ERROR_500,
                    resultData: {
                        errorMessage: 'Something went wrong. Try again later', 
                        data: [],
                        totalCount: 0
                    }}
        }        
    },
    updateOne: async function(req: NextApiRequestWithBody) {
        try {
            const result: RowDataPacket[] | QueryError = await updateClientMessageModel(req.body.id, req.body.checked)
            const data: ClientMessageModel = JSON.parse(JSON.stringify(result as RowDataPacket))
            return {status: http_codes.SUCCESS_200,
                    resultData: {
                    errorMessage: '',
                    data: {}
                }}
        } catch (err) {
            return {status: http_codes.SERVER_ERROR_500,
                    resultData: {
                    errorMessage: 'Something went wrong. Try again later', 
                    data: {}
                }}
        }
    }
}