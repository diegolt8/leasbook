import {Request, Response} from 'express'
import Book from '../models/Book'
import path from 'path'
import fs from 'fs-extra'

export async function getBooks(req: Request, res: Response): Promise<Response> {
    const book = await Book.find();
    return res.json(book);
}

export async function getBook(req: Request, res: Response): Promise<Response> {
   const { id } = req.params;
   const book = await Book.findById(id)
   return res.json(book);
}

export async function createBook(req: Request, res: Response): Promise<Response>{
    const {name, description, synopsis, publication_date, editorial, autor, genre} =  req.body;
    console.log(req.file.path)
    const newBook = {
        name: name,
        description:description,
        synopsis:synopsis,
        publication_date:publication_date,
        add_photo: req.file.path,
        editorial:editorial,
        autor:autor,
        genre:genre
    }
    const book = new Book(newBook);
    await book.save();
    return res.json({
        message: 'Registrado con exito', book
    })
};

export async function deleteBook(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const book = await Book.findByIdAndRemove(id);
    if (book) {
        fs.unlink(path.resolve(book.add_photo))
    }
    return res.json({
        message: 'Publicacion eliminada', book
    });
}

export async function updateBook(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {name, description, synopsis, publication_date, editorial, autor, genre} =  req.body;
    const updateBook = await Book.findByIdAndUpdate(id, {
        name,
        description,
        synopsis,
        publication_date,
        editorial,
        autor,
        genre
    }, {new: true});
    return res.json({
        message: 'Actualización realizada!',
        updateBook
    })
}