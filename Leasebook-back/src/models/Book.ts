import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    name: String,
    description: String,
    synopsis: String,
    publication_date: Date,
    add_photo: String,
    autor: String,
    genre: String,
    editorial: String
});

interface IBook extends Document {
    name: string;
    description: string;
    add_photo: string;
}

export default model<IBook>('Book', schema);