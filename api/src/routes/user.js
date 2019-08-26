/* eslint-disable linebreak-style */
import express from 'express';
import userController from '../controllers/userController';
import validationHandler from '../middlewares/validationHandler';
import userValidation from '../validations/userValidation';

const userRoutes = express.Router();

const validate = [validationHandler.validate];

userRoutes.post(
  '/signup',
  userValidation.signUp,
  validate,
  userController.signUp,
);
userRoutes.post(
  '/signin',
  userValidation.signIn,
  validate,
  userController.signIn,
);

export default userRoutes;
