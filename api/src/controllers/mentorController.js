/* eslint-disable linebreak-style */
import { config } from 'dotenv';
import User from '../models/user';
import Mentor from '../models/mentor';

config();


/**
 *
 * @class MentorController
 */
class MentorController {
  /**
     * Create a new mentor
     * @static
     * @param {object} req
     * @param {object} res
     * @returns { Object }
     * @memberof UserController
     */
  static async createMentor(req, res) {
    const user = User.findOne(req.user.email);
    if (user) {
      const newMentor = Mentor.create(req.user.id, req.body);
      return res.status(201).send({
        status: res.statusCode,
        data: {
          id: newMentor.id,
          email: user.email,
          createdOn: newMentor.createdOn,
          occupation: newMentor.occupation,
          bio: newMentor.bio,
          expertise: newMentor.expertise,
          state: newMentor.state,
          status: newMentor.status,
        },
      });
    }
    return res.status(404).send({
      status: res.statusCode,
      error: 'User is not registered',
    });
  }

  static async getMentorById(req, res) {
    // eslint-disable-next-line radix
    const mentor = await Mentor.findOne(parseInt(req.params.id, 10));
    if (mentor) {
      return MentorController.customResponse(mentor, res);
    }
    return res.status(404).json({
      status: res.statusCode,
      message: 'This mentor cannot be found!',
    });
  }

  /**
     * Return a custom response
     * @static
     * @param {Object} obj the mentor object
     * @param {*} res the HTTP response object
     * @returns { Object } Returns a mentor Object
     * @memberof MentorController
     */
  static customResponse(obj, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: {
        id: obj.id,
        mentor: obj.mentor,
        createdOn: obj.createdOn,
        occupation: obj.occupation,
        bio: obj.bio,
        expertise: obj.expertise,
        state: obj.state,
        status: obj.status,
        modifiedOn: obj.modifiedOn,
      },
    });
  }

  /**
     * Get all mentors
     * @static
     * @param {*} req
     * @param {*} res
     * @returns { Array } Returns an array of Objects
     * @memberof MentorController
     */
  static async getAllMentors(req, res) {
    const queryLength = parseInt(Object.keys(req.query).length, 10);

    if (queryLength === 0) {
      if (req.user.isAdmin === true) {
        return MentorController.getAllmentors(res);
      }
      return res.status(403).json({
        status: res.statusCode,
        error: 'Forbidden',
      });
    }
    if (queryLength === 1 && req.query.status) {
      if (req.query.status === 'available') {
        const allMentors = Mentor.findAllByStatus(req.query.status);
        return MentorController.response(allMentors, res);
      }
      return res.status(404).json({
        status: res.statusCode,
        error: 'Not found',
      });
    }

    return res.status(404).json({
      status: res.statusCode,
      error: 'Not found',
    });
  }

  /**
     * Mark posted session request as accepted
     * @static
     * @param {*} req
     * @param {*} res
     * @returns { Object } Returns the updated session request Object
     * @memberof MentorController
     */
  static async markSessionAccepted(req, res) {
    const session = await Mentor.findOne(parseInt(req.params.id, 10));
    if (session) {
      if (session.mentor === req.user.id) {
        const updatedMentor = Mentor.updateStatus(parseInt(req.params.id, 10));
        return MentorController.customResponse(updatedMentor, res);
      }
      return res.status(401).json({
        status: res.statusCode,
        error: 'Unauthorised User',
      });
    }
    return res.status(404).json({
      status: res.statusCode,
      error: 'Not Found',
    });
  }
}

export default MentorController;
