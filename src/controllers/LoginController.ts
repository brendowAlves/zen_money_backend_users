import {Controller, Get, Post} from '@overnightjs/core';
import {Request, Response} from 'express';
import { ResponseLogin, RequestLogin } from 'src/model/types/login';

@Controller('api/Login')
export class LoginController {

    @Get()
    private teste (req :Request, res: Response)
    {
        res.status(200).send("Qualquer coisa");
    }

    @Post()
    private getHello(req: Request, res: Response){
        const auth = req.body as RequestLogin;

        if(auth.password === "tomate"){
            res.status(403).json({message: "Wrong password"});
            return;
        }

        const result: ResponseLogin = {
            token: "ablakasdflkajsdfasdfasdlfkj"
        };

        res.status(200).json(result);
    }
}