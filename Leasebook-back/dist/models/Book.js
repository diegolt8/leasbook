"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: String,
    description: String,
    synopsis: String,
    publication_date: Date,
    add_photo: String,
    autor: String,
    genre: String,
    editorial: String
});
exports.default = mongoose_1.model('Book', schema);
