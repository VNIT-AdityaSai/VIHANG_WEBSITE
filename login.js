import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const loginRouter = express.Router();

loginRouter.use(bodyParser.json());

const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

const secretKey = 'vihang@TS';

loginRouter.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});


const authenticateJWT = (req, res, next) => {
    let token = req.header('Authorization');

    if (!token) {
        return res.sendStatus(401);
    }

    token = token.split("Bearer ")[1]
    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

export { loginRouter, authenticateJWT };
