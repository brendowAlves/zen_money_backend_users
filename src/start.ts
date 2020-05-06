
import ZenMoneyServer from './Server';
import { LoginController } from './controllers/LoginController';
import { BalanceController } from './controllers/BalanceController';
require('dotenv').config()


const controllers: InstanceType<any>[] = [
    new LoginController(),
    new BalanceController()
];

const server = new ZenMoneyServer(controllers);
server.start(3000);
