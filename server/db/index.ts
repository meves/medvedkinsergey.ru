import { createPool } from 'mysql2'

export const connectDB = () => {
    return createPool({
            host: process.env.host,
            database: process.env.database,
            user: process.env.user,
            password: process.env.NODE_ENV === 'development' 
                    ? process.env.password_development 
                    : process.env.password_production,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        }
    )
}