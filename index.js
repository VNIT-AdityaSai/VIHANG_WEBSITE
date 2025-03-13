import mongoose from 'mongoose';
import express from 'express';
import allRoutes from './routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { loginRouter, authenticateJWT } from './login.js';



async function main() {

    await dotenv.config({
        path: '.env.local'
    });

    // await mongoose.connect('mongodb://localhost:27017/vihang');
    let connection_string = `mongodb+srv://mt23mcs002:`+ process.env.DB_PASSWORD + `@cluster0.r5tkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    await mongoose.connect(connection_string)
    console.log('Connected to MongoDB');

    const app = express();
    const port = 3000;

    app.use(cors());
    app.use(express.json());

    app.use(loginRouter)
    app.use(allRoutes)

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

main()