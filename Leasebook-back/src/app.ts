import express, { Application } from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index';
import path from 'path';
import authRoutes from './routes/auth';

const app: Application = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', indexRouter);
app.use('/api/auth', authRoutes);

//this folder for this application will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));
export default app;