const access_token = "4ffe4e9e966e563116567f21c46aaa34918a5ac9be8e24c1108de608de37709b2c74678037e590d9528ab52c675fc002a485754c1344ff5c088bec90f85a59de";
const db_connection = "mongodb://127.0.0.1:27017/zen-db";
const secret_password = "b41a25d9f342c826618d421e8c48901a79540dd4eb9dbbadacf9fb5577c4eabba16ccaa17915a9923128d5edc967e4be8ef6bca3ceda748fb1345f47983d837a";

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || access_token;
export const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || db_connection;
export const SECRET_FOR_PASSWORD = process.env.SECRET_PASSWORD || secret_password;