"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../models/Book"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function getBooks(req, res) {
    const book = await Book_1.default.find();
    return res.json(book);
}
exports.getBooks = getBooks;
async function getBook(req, res) {
    const { id } = req.params;
    const book = await Book_1.default.findById(id);
    return res.json(book);
}
exports.getBook = getBook;
async function createBook(req, res) {
    const { name, description, synopsis, publication_date, editorial, autor, genre } = req.body;
    console.log(req.file.path);
    const newBook = {
        name: name,
        description: description,
        synopsis: synopsis,
        publication_date: publication_date,
        add_photo: req.file.path,
        editorial: editorial,
        autor: autor,
        genre: genre
    };
    const book = new Book_1.default(newBook);
    await book.save();
    return res.json({
        message: 'Registrado con exito', book
    });
}
exports.createBook = createBook;
;
async function deleteBook(req, res) {
    const { id } = req.params;
    const book = await Book_1.default.findByIdAndRemove(id);
    if (book) {
        fs_extra_1.default.unlink(path_1.default.resolve(book.add_photo));
    }
    return res.json({
        message: 'Publicacion eliminada', book
    });
}
exports.deleteBook = deleteBook;
async function updateBook(req, res) {
    const { id } = req.params;
    const { name, description, synopsis, publication_date, editorial, autor, genre } = req.body;
    const updateBook = await Book_1.default.findByIdAndUpdate(id, {
        name,
        description,
        synopsis,
        publication_date,
        editorial,
        autor,
        genre
    }, { new: true });
    return res.json({
        message: 'Actualización realizada!',
        updateBook
    });
}
exports.updateBook = updateBook;
//# sourceMappingURL=bookctrl.js.map