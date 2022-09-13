import { connectDB } from '..';
import { QueryError, RowDataPacket, FieldPacket, Pool } from 'mysql2';
import { ClientMessageModel } from '../../types/models/ClientMessageModel';

export const createClientMessageModel = async (
    { username, email, message } : 
    { username: string, email: string, message: string }
): Promise<ClientMessageModel | QueryError> => {

    return new Promise((resolve, reject) => {
        const pool: Pool = connectDB()
        const date = new Date()
        const id = Number(date)
        const query = 'INSERT INTO `client_message` VALUES (?, ?, ?, ?, ?, ?);'
        pool.query(
            query, 
            [id, username, email, message, date, false], 
            (err: QueryError | null, result: RowDataPacket[], fields: FieldPacket[]) => {
            if (err) {
                reject(err)
            }
            const data: ClientMessageModel = {
                id,
                username,
                email,
                message,
                created_date: date,
                checked: false

            }
            resolve(data)
        })
    })
}

export const getAllClientMessagesModel = async (page: number, count: number): Promise<RowDataPacket[] | QueryError> => {
    return new Promise((resolve, reject) => {
        const pool: Pool = connectDB()
        const query = 'SELECT * FROM `client_message` LIMIT ? OFFSET ?;'
        const offset = (page-1) * count
        pool.query(query, [count, offset], (err: QueryError | null, result: RowDataPacket[], flieds: FieldPacket[]) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

export const getTotalCountMessagesModel = async (): Promise<RowDataPacket[] | QueryError> => {
    return new Promise((resolve, reject) => {
        const pool: Pool = connectDB()
        const query = 'SELECT count(*) as `totalCount` FROM `client_message`;'
        pool.query(query, (err: QueryError | null, result: RowDataPacket[], fields: FieldPacket[]) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

export const updateClientMessageModel = async (id: number, checked: boolean): Promise<RowDataPacket[] | QueryError> => {
    return new Promise((resolve, reject) => {
        const pool: Pool = connectDB()
        const query = 'UPDATE `client_message` SET `checked`=? WHERE `id`=?;'
        pool.query(query, [checked, id], (err: QueryError | null, result: RowDataPacket[], fields: FieldPacket[]) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}