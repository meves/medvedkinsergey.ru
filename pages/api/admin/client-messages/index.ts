import { NextApiRequest } from 'next'
import { adminController } from '../../../../server/controllers/adminController'
import { NextApiRequestWithBody, NextApiRequestWithQuery, NextApiResponseView } from '../../../../server/types/api/admin';

export default async function apiAdminHandler(req: NextApiRequest, res: NextApiResponseView) {
    if (req.method === 'GET') {
            const { status, resultData } = await adminController.getAll(req as NextApiRequestWithQuery)
            return res.status(status).json(resultData)
    } 
    else if (req.method === 'PUT') {
        const { status, resultData } = await adminController.updateOne(req as NextApiRequestWithBody)
        return res.status(status).json(resultData)
    }    
} 