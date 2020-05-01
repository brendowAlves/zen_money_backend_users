import { Server } from "@overnightjs/core";
import bodyParser = require('body-parser');
import { LoginController } from './controllers/LoginController';

export default class ZenMoneyServer extends Server {
    constructor(controllers: InstanceType<any>[]){
        super(true);

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        super.addControllers(controllers);
    }

    public start(port: number): void{
        this.app.get('*', (req,res) => {
            const {url} = req;
            res.send(`The server is online \n ${url}`);
        });

        this.app.listen(port, () => {
            console.log(`O Servidor esta rodando na porta: ${port}`);
        });
    }
}