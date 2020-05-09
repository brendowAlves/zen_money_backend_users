import { Document, Schema, model } from 'mongoose';

const collection = "user";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
};

export const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, required: true, default: true }
});

export default model<IUser>(collection, UserSchema, collection);


