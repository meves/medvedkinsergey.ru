import { NextApiRequest, NextApiResponse } from "next";

interface NextApiQueryRequest extends NextApiRequest {
    query: {
        id : string
    }
}

export default function contactmeHandler(
    req: NextApiQueryRequest, 
    res: NextApiResponse
) {
    switch (req.method) {
        case 'GET':
            return res.status(200).json(
            {  
                name: 'Sergey', 
                age: 50, 
                env: `${process.env.NODE_ENV}`, 
                id: req.query.id
            }
        )
    }
}