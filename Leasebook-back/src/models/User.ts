import { Schema, model, Document } from 'mongoose'
import bcryptjs from 'bcryptjs'

export interface IUser extends Document{
    username: string,
    email: string,
    password: string,
    address: string,
    nit: string,
    city: string,
    phone: string,
    birth_date: Date
    encryptPassword(password: string): Promise<string>; 
    validatePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        min: 4,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    nit: {
        type: String,
        required: true,
        unique: true
    },
    city:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    birth_date:{
        type: Date,
        required: true
    }
});

userSchema.methods.encryptPassword = async(password: string): Promise<string> => {
   const salt =  await bcryptjs.genSalt(10);
   return bcryptjs.hash(password, salt);
};

userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcryptjs.compare(password, this.password);
}

export default model<IUser>('user', userSchema);
