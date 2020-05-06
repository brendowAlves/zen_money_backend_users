import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { ResponseLogin, RequestLogin } from 'src/model/types/login';
import * as jwt from 'jsonwebtoken'

@Controller('api/Login')
export class LoginController {

    @Get("")
    private teste(req: Request, res: Response) {
        res.status(200).send("Qualquer coisa");
    }

    @Post()
    private login(req: Request, res: Response) {
        const auth = req.body as RequestLogin;
        const secretKey = process.env.ACCESS_TOKEN_SECRET;

        if (auth.password === "senha") {
            res.status(403).json({ message: "Wrong password" });
            return;
        }

        if (!secretKey) return res.status(401).send('kd a chave');

        const user = { user: auth.user };

        const token = jwt.sign(user, secretKey);

        res.status(200).json(token);
    }
}