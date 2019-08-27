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
};
