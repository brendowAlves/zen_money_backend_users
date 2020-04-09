export interface RequestLogin{
    user: string;
    password: string;
}

export interface ResponseLogin{
    token: string;
}