import express from 'express';
import userRoutes from './user';


const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => res.json({
  status: 200,
  message: 'Welcome to Free Mentors API',
}));

apiRoutes.get('/v1', (req, res) => res.json({
  status: 200,
  message: 'Welcome to version 1 of Free Mentors API',
}));

apiRoutes.use('/v1/auth', userRoutes);


export default apiRoutes;
