
import ZenMoneyServer from './Server';
import { LoginController } from './controllers/LoginController';
import { UserController } from './controllers/UserController';
import { DB_CONNECTION_STRING } from './constants';
import { connect } from 'mongoose';


const connectionString: string = DB_CONNECTION_STRING;

const doConnection = (): void => {
    connect(connectionString)
        .then(() => console.log(`Conexão realizada com sucesso: ${connectionString}`))
        .catch(err => {
            console.error(`Erro na conexão com o banco:${connectionString}`);
            console.error(err.message);
            setTimeout(doConnection, 5000);
        })
}

doConnection();

const controllers: InstanceType<any>[] = [
    new LoginController(),
    new UserController()
];

const server = new ZenMoneyServer(controllers);
server.start(3000);