import {Controller, Get} from '@overnightjs/core';
import {Request, Response} from 'express';

@Controller('api/Login')
export class LoginController {
    @Get()
    private getHello(req: Request, res: Response){
        res.status(200).json({
            message: "hello world"
        });
    }
}