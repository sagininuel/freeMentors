/* eslint-disable linebreak-style */
import { check } from 'express-validator/check';
import notEmpty from '../helpers/notEmpty';

export default {
  signup: [
    check(['firstname', 'lastname', 'email'])
      .trim()
      .exists()
      .withMessage('All fields are required')
      .custom((value) => notEmpty(value, 'All fields are required')),
    check(['lastname', 'firstname'])
      .isString()
      .withMessage('Firstname and lastname must be a string')
      .isLength({ min: 3 })
      .withMessage('Firstname and lastname must be minimum of 3 characters'),
    check('email')
      .isEmail()
      .withMessage('Please input a valid email address'),
  ],

  signin: [
    check('email')
      .trim()
      .exists()
      .withMessage('Email must be specified')
      .custom((value) => notEmpty(value, 'email field cannot be left blank'))
      .isEmail()
      .withMessage('Please input a valid email address'),
    check('password')
      .trim()
      .exists().withMessage('Password must be specified')
      .isLength({ min: 6 })
      .withMessage('Password must be minimum of 6 characters')
      .matches(/\d/)
      .withMessage('Password must contain a number')
      .custom((value) => notEmpty(value, 'Password field cannot be left blank')),
  ],
};
