/* eslint-disable linebreak-style */
import express from 'express';
import ValidationHandler from '../middlewares/validationHandler';
import MentorController from '../controllers/mentorController';
import MentorValidation from '../validations/mentorValidation';


const mentorRoutes = express.Router();

mentorRoutes.get('/:mentorId', MentorValidation.getMentorById, ValidationHandler.validate, MentorController.getMentorById);
mentorRoutes.get('/', MentorValidation.getAllMentors, ValidationHandler.validate, MentorController.getAllMentors);


export default mentorRoutes;


/**
 * @swagger
 * definitions:
 *   Mentor:
 *     type: object
 *     required:
 *       - state
 *       - status
 *       - expertise
 *       - occupation
 *       - bio
 *       - bodyType
 *       - apiKey
 *
 *     properties:
 *       state:
 *         type: string
 *         enum:
 *           - novice
 *           - experienced
 *       status:
 *         type: string
 *         enum:
 *           - booked
 *           - available
 *       expertise:
 *         type: int
 *         format: int64
 *       occupation:
 *         type: string
 *       bio:
 *         type: string
 *       bodyType:
 *         type: string
 *       apiKey:
 *         name: authorization
 *         in: header
 *         type:
 *
 *
 *   Errors:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         location:
 *           type: string
 *           description: source of the data
 *         param:
 *           type: string
 *           description: name of the field
 *         value:
 *           type: string
 *           description: value of the field
 *         msg:
 *           type: string
 *           description: information on the error
 *
 *
 *   NewMentor:
 *     type: object
 *     required:
 *       - id
 *       - createdOn
 *       - email
 *       - occupation
 *       - bio
 *       - expertise
 *       - status
 *       - state
 *     properties:
 *       id:
 *         type: int
 *       createOn:
 *         type: datetime
 *       email:
 *         type: string
 *         format: email
 *       occupation:
 *         type: string
 *       bio:
 *         type: string
 *       status:
 *         type: string
 *       state:
 *         type: string
 *
 *
 */


/**
 * @swagger
 *
 * /api/v1/mentors:
 *   post:
 *     description: Creates a New mentor
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewMentor'
 *     responses:
 *       201:
 *         description: Created
 *         schema:
 *           $ref: '#/definitions/Mentor'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not found
 *     security:
 *       - apiKey : []
 *
 *
 */


/**
 * @swagger
 *
 * /api/v1/mentors/<:id>/:
 *   get:
 *     description: Return  a specific mentor
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the specific mentor to return
 *         in: path
 *         type: int
 *       - name : authorization
 *         description: Access token for authentication
 *         in : header
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/Mentor'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not found
 *     security:
 *       - apiKey : []
 *
 *
 */
/**
 * @swagger
 * /api/v1/mentors?status=available:
 *   get:
 *     description: Returns a list of all mentors.
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               description: All mentors.
 *               items:
 *                 type: object
 *                 proprties:
 *                     $ref: '#/definitions/Mentor'
 *       404:
 *         description: Not Found
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *     security:
 *       - apiKey : []
 */


/**
 * @swagger
 *
 * /api/v1/mentors/<:id>/status:
 *   patch:
 *     description: Mark a mentor as available.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the specific mentor to update
 *         in: path
 *         type: int
 *       - name : authorization
 *         description: Access token for authentication
 *         in : header
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/Mentor'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not found
 *     security:
 *       - apiKey : []
 *
 *
 */

/**
 * @swagger
 * /api/v1/mentors/:
 *   get:
 *     description: Returns a list of all mentors available.
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               description: all registered mentors.
 *               items:
 *                 type: object
 *                 proprties:
 *                     $ref: '#/definitions/Mentor'
 *       404:
 *         description: Not Found
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *     security:
 *       - apiKey : []
 */
/**
 * @swagger
 * Securitydefinitions:
 *   APIKeyHeader:
 *     type: apiKey
 *     in: header
 *     name: Authorization
 *
 *
 *
 *
 *
 */
