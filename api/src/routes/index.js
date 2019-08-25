/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import express from 'express';
import userRoutes from './user';

const mentorRoutes = express.Router();

mentorRoutes.get('/', (req, res) => res.json({
        status: 200,
        message: 'Welcome to Free Mentors API'
    }));

mentorRoutes.get('/v1', (req, res) => res.json({
        status: 200,
        message: 'Welcome to version 1 of Free Mentors API'
    }));

mentorRoutes.use('/v1/auth', userRoutes);

export default mentorRoutes;
