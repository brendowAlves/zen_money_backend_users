import UserRepo, { IUser } from './UserRepo';
import * as crypto from 'crypto'
import { SECRET_FOR_PASSWORD, ACCESS_TOKEN_SECRET } from '../../../constants';
import * as jwt from 'jsonwebtoken';
import { PayloadToken } from '../../types/login';
type gentoken = (user: IUser) => string;

export class UserApp {

    public createAcessToken = (user: IUser): Promise<string> =>
        this.getActiveUserByEmailAndPassword(user)
            .then(usrAtive => {
                if (!usrAtive) throw new Error("Usuário ou Senha incorretos");
                return usrAtive;
            })
            .then(this.generateToken)

    private generateToken: gentoken = ({ id, name, email }) =>
        jwt.sign({ id, name, email } as PayloadToken, ACCESS_TOKEN_SECRET);

    private getActiveUserByEmailAndPassword = (user: IUser): Promise<IUser | null> => {
        const { email, password } = this.encryptPassword(user);
        return UserRepo.findOne({ email, password, active: true }).then();
    }

    public insertUser = (user: IUser): Promise<IUser> =>
        this.getUserByEmail(user.email)
            .then(usr => {
                if (!!usr) throw new Error("Usuario já cadastrado");
                return user;
            })
            .then(this.validateUser)
            .then(this.encryptPassword)
            .then(x => UserRepo.insertMany(x))
            .then((docs: any) => docs[0]);


    private getUserByEmail = (email: string): Promise<IUser | null> =>
        UserRepo.findOne({ email })
            .then();

    private encryptPassword = (user: IUser): IUser => {
        const hash = crypto.createHmac('sha256', SECRET_FOR_PASSWORD)
            .update(user.password)
            .digest('hex');

        return { ...user, password: hash } as IUser;
    }

    private validateUser = (user: IUser): IUser => {
        if (!user.password)
            throw new Error("Password must be informed");

        user.email = user.email.toLowerCase();

        return user;
    }
}
