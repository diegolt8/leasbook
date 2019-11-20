"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "secret1234";
exports.signup = async (req, res) => {
    const { username, email, password, address, nit, city, phone, birth_date } = req.body;
    const user = new User_1.default({
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
    const token = jsonwebtoken_1.default.sign({ _id: saveUser._id }, process.env.SECRET_KEY || 'token');
    res.header("auth-token", token).json(saveUser);
};
exports.signin = async (req, res) => {
    const user = await User_1.default.findOne({ email: req.body.email });
    if (!user)
        return res.status(400).json('Email o contraseña incorrectos');
    const correctPassword = await user.validatePassword(req.body.password);
    if (!correctPassword)
        return res.status(400).json('Contraseña invalida');
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.SECRET_KEY || 'token', {
        expiresIn: 60 * 60 * 24
    });
    res.header('auth-token', token).json(user);
};
exports.profile = (req, res) => {
    res.send('profile');
};
//# sourceMappingURL=authctrl.js.map