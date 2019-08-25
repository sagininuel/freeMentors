import express from 'express';
import userController from '../controllers/userController';
import validationHandler from '../middlewares/validationHandler';
import userValidation from '../validations/userValidation';

const userRoutes = express.Router();

const validate = [validationHandler.validate];

userRoutes.post('/signUp', userValidation.signUp, validate, userController.signUp);

export default userRoutes;
