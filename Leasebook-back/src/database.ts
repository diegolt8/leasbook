import {connect} from 'mongoose'

export async function startConnection() {
    await connect('mongodb://localhost/leasebookDb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    console.log('Database is connected');
}
