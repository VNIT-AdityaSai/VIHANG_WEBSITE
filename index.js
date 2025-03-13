import mongoose from 'mongoose';
import express from 'express';
import pointRouter from './routes.js';
import cors from 'cors';

async function main() {
    await mongoose.connect('mongodb://localhost:27017/vihang');
    console.log('Connected to MongoDB');

    const app = express();
    const port = 3000;

    app.use(cors());
    app.use(express.json());

    app.use(pointRouter);

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

main()