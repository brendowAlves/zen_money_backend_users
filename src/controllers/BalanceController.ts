import { Controller, Get, ClassMiddleware } from '@overnightjs/core';
import { Response } from 'express';
import { RequestZen, auth } from '../model/middleware/Authentication';

const balances = [
    {
        user: "Brendow",
        balance: 3500
    },
    {
        user: "Kevyn Klava",
        balance: 3600
    }
]

@Controller('api/balance')
@ClassMiddleware(auth)
export class BalanceController {

    @Get("")
    private getBalance(req: RequestZen, res: Response) {
        const balance = balances.find(x => x.user === req.user) || {};

        res.status(200).json(balance);
    }
}

