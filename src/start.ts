
import ZenMoneyServer from './server';
import { LoginController } from './controllers/LoginController';


const controllers: InstanceType<any>[] = [
    new LoginController()
];

const server = new ZenMoneyServer(controllers);
server.start(3000);
