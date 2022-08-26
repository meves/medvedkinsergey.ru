import { createPool } from 'mysql2'

export const connectDB = () => {
    return createPool({
            host: 'localhost',
            database: 'portfolio-site',
            user: 'root',
            password: 'Hk_61-S*d+85',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        }
    )
}