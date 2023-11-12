import type {NextApiRequest, NextApiResponse} from 'next';
import {getAllUsers} from "@/db/users";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const users = await getAllUsers();
        res.status(200).json(
                users
        );
    }
}
