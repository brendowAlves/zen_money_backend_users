import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { ACCESS_TOKEN_SECRET } from '../../constants';


export type RequestZen = Request & { user: string };

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const secretKey = process.env.ACCESS_TOKEN_SECRET || ACCESS_TOKEN_SECRET;
    const authToken = req.headers.authorization;

    if (!authToken) return res.status(401).send('Quem é você');

    jwt.verify(authToken, secretKey as string, (err, payload) => {
        if (err) return res.status(403).send('Não autorizado');

        (req as RequestZen).user = (payload as any).user;

        next();
    });

}
