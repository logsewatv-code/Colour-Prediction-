'use strict';

const jwt = require('jsonwebtoken');

const YOUR_SECRET_KEY = 'your_secret_key'; // Replace with your actual secret key

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    
    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, YOUR_SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateJWT;