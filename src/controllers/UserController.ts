import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express'
import { IUser } from '../model/app/user/UserRepo';
import { UserApp } from '../model/app/user/UserApp';


@Controller('api/user')
export class UserController {
    private app: UserApp;

    constructor() {
        this.app = new UserApp();
    }

    @Post()
    private createUser(req: Request, res: Response): void {
        const user = req.body as IUser;

        console.log(`solicitado criar o usuario com nome ${user.name}`);

        this.app.insertUser(user)
            .then(user => {
                console.log(`usuario criado com o id ${user._id}`);
                res.sendStatus(201);
            })
            .catch(err => {
                console.error(`error creating user \n ${err}`);
                res.status(500).send(err.message);
            });

    }

}