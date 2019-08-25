/* eslint-disable linebreak-style */
import user from '../models/user';


/**
 *
 * @class UserController
 */
class userController {
  /**
     * Create a new User
     * @static
     * @param {object} req
     * @param {object} res
     * @returns { Object }
     * @memberof UserController
     */
  static async signUp(req, res) {
    const isTheUserRegistered = user.findOne(req.body.email);

    if (!isTheUserRegistered) {
      const isUserRegistered = user.create(req.query, req.body);

      return res.status(201).send({
        status: res.statusCode,
        data: {

          id: isUserRegistered.id,
          email: isUserRegistered.email,
          firstname: isUserRegistered.firstname,
          lastname: isUserRegistered.lastname,

        },
      });
    }


    return res.status(400).send({
      status: res.statusCode,
      error: 'Sorry, this Email is already registered',
    });
  }
}

export default userController;
