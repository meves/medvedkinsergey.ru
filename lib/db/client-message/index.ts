import { connectDB } from '..';
import { QueryError, RowDataPacket, FieldPacket, Pool } from 'mysql2';
import { ContactmeViewModel } from "../../../types/models/ContactmeViewModel";

export const createClientMessage = async (
    { username, email, message } : 
    { username: string, email: string, message: string }
): Promise<ContactmeViewModel | QueryError> => {

    return new Promise((resolve, reject) => {
        const pool: Pool = connectDB();
        const id = Number(new Date());
        const query = 'INSERT INTO `client_message` VALUES (?, ?, ?, ?);'
        pool.query(
            query, 
            [id, username, email, message], 
            (err: QueryError | null, result: RowDataPacket[], fields: FieldPacket[]) => {
            if (err) {
                reject(err)
            }
            resolve({
                message: '',
                data: [{
                    id, username, email, message
                }]
            })
        })
    })
}