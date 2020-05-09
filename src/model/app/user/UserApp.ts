import UserRepo, { IUser } from './UserRepo';
import * as crypto from 'crypto'
import { SECRET_PASSWORD } from 'src/constants';


export class UserApp {


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
            .then(UserRepo.insertMany)
            .then((docs: any) => docs[0]);


    private getUserByEmail = (email: string): Promise<IUser | null> =>
        UserRepo.findOne({ email })
            .then();

    private encryptPassword = (user: IUser): IUser => {
        const hash = crypto.createHmac('sha256', SECRET_PASSWORD)
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
