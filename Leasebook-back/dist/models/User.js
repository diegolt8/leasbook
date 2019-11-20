"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.Schema({
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
    city: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    }
});
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcryptjs_1.default.genSalt(10);
    return bcryptjs_1.default.hash(password, salt);
};
userSchema.methods.validatePassword = async function (password) {
    return await bcryptjs_1.default.compare(password, this.password);
};
exports.default = mongoose_1.model('user', userSchema);
//# sourceMappingURL=User.js.map