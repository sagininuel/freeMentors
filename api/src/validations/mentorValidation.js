/* eslint-disable linebreak-style */
import { check, param, query } from 'express-validator/check';
import notEmpty from '../helpers/notEmpty';

export default {
  createSaleAd: [
    check(['occupation', 'expertise', 'state', 'status', 'bio', 'bodyType'])
      .trim()
      .exists()
      .withMessage('All fields are required')
      .custom((value) => notEmpty(value, 'All fields are required')),
    check(['occupation', 'state', 'status', 'bio', 'bodyType'])
      .isString()
      .withMessage('All fields are supposed to be strings'),
    check('expertise')
      .isInt()
      .withMessage('Expertise can only be in the form of integers as years'),
  ],
  getMentorById: [
    param('id')
      .exists()
      .withMessage('Mentor id is required')
      .custom((value) => notEmpty(value, 'Mentor id is required'))
      .isInt()
      .withMessage('Mentor id  can only be in the form of integers'),
  ],
  getAllMentors: [
    query(['status'])
      .isString()
      .withMessage('Your query  should be of type string')
      .optional(),
  ],
};
