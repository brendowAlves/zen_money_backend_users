export interface RequestLogin {
    email: string;
    password: string;
}

export interface ResponseLogin {
    token: string;
}

export interface PayloadToken {
    id: string;
    name: string;
    email: string;
}