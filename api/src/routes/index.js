/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import express from 'express';
import userRoutes from './user';
import mentorRoutes from './mentor';

const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => res.json({
    status: 200,
    message: 'Welcome to Free Mentors API'
}));

apiRoutes.get('/v1', (req, res) => res.json({
    status: 200,
    message: 'Welcome to version 1 of Free Mentors API'
}));

apiRoutes.use('/v1/auth', userRoutes);
apiRoutes.use('/v1/mentors', mentorRoutes);

export default apiRoutes;
