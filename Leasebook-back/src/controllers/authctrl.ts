import { Request, Response } from 'express'
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';

const SECRET_KEY = "secret1234";

export const signup = async (req: Request, res: Response) => {
    const {username, email, password, address, nit, city, phone, birth_date} =  req.body
    const user: IUser = new User({
        username: username,
        email: email,
        password: password,
        address: address,
        nit: nit,
        city: city,
        phone: phone,
        birth_date: birth_date
    });

    user.password = await user.encryptPassword(user.password);
    const saveUser = await user.save();
    const token: string = jwt.sign({ _id: saveUser._id }, process.env.SECRET_KEY || 'token');
    res.header("auth-token", token).json(saveUser);

};

export const signin = async (req: Request, res: Response) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json('Email o contraseña incorrectos');

    const correctPassword: boolean = await user.validatePassword(req.body.password);
    if (!correctPassword) return res.status(400).json('Contraseña invalida');

    const token: string = jwt.sign({ _id: user._id }, process.env.SECRET_KEY || 'token', {
        expiresIn: 60 * 60 * 24
    })
    res.header('auth-token', token).json(user);
};

export const profile = (req: Request, res: Response) => {
    res.send('profile');
};