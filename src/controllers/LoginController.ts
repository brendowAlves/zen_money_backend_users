import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { ResponseLogin, RequestLogin } from '../model/types/login';
import * as jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET } from '../constants';
import { UserApp } from '../model/app/user/UserApp';
import { IUser } from '../model/app/user/UserRepo';

@Controller('api/login')
export class LoginController {

    @Post()
    private login(req: Request, res: Response) {
        const auth = req.body as RequestLogin;

        const userApp = new UserApp();
        const user = { email: auth.email, password: auth.password } as IUser

        userApp.createAcessToken(user)
            .then(token => res.status(200).json({ token }))
            .catch(error => res.status(403).json(error.message));
    }
}