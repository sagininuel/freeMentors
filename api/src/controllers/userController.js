/* eslint-disable linebreak-style */
import { config } from 'dotenv';
import user from '../models/user';

config();

/**
 *
 * @class UserController
 */
class UserController {
  /**
     * Create a new User
     * @static
     * @param {object} req
     * @param {object} res
     * @returns { Object }
     * @memberof UserController
     */
  static async signup(req, res) {
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

  static async signin(req, res) {
    const { email } = req.body;
    const userFound = user.findOne(email);

    if (!userFound) {
      return res.status(404).send({
        status: res.statusCode,
        error: 'Sorry, this Email is not registered',
      });
    }
    // const isPasswordValid = userController.verifyPassword(password, userFound.password);

    // if (!isPasswordValid) {
    //   return res.status(401).send({
    //     status: res.statusCode,
    //     error: 'Sorry, wrong Password',
    //   });
    // }

    // const token = Authorization.generateToken(userFound);

    return res.status(200).send({
      status: res.statusCode,
      data: {
        id: userFound.id,
        email: userFound.email,
        firstname: userFound.firstname,
        lastname: userFound.lastname,
        // isAdmin: JSON.parse(userFound.isAdmin),
      },
    });
  }

  // static verifyPassword(password, hash) {
  //   return bcrypt.compareSync(password, hash);
  // }
}

export default UserController;
