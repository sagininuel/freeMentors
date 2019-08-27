/* eslint-disable linebreak-style */
import { config } from 'dotenv';
import moment from 'moment';

config();

class Mentor {
  /**
     * class constructor
     *
     */
  constructor() {
    this.mentors = [];
  }

  /**
     * @param {integer} userId
     * @param {object} data
     * @returns {object} car object
     */
  create(userId, data) {
    const newMentor = {
      id: this.mentors.length + 1,
      mentor: userId || '',
      createdOn: moment.now() || '',
      state: data.state || '',
      status: data.status || '',
      expertise: data.expertise || '',
      occupation: data.occupation || '',
      bio: data.bio || '',
      bodyType: data.bodyType || '',
      modifiedDate: moment.now(),
    };
    this.mentors.push(newMentor);
    return newMentor;
  }


  /**
     *
     * @param {integer} id
     * @returns {object} mentor object
     */
  findOne(id) {
    // eslint-disable-next-line radix
    return this.mentors.find((mentor) => parseInt(mentor.id) === id);
  }

  /**
     * @returns { Array } returns all mentors
     */
  findAll() {
    return this.mentors;
  }

  /**
     *
     * @param {integer} id
     * @returns {object} mentor object
     */
  updateStatus(id) {
    const mentor = this.findOne(id);
    const index = this.mentors.indexOf(mentor);
    this.mentors[index].modifiedDate = moment.now();
    this.mentors[index].status = 'booked';
    return this.mentors[index];
  }

  /**
     *
     * @param {integer} id id of the mentor
     * @param {integer} expertise new experience year period
     * @returns {object} mentor object
     */
  updateSellingPrice(id, expertise) {
    const mentor = this.findOne(id);
    const index = this.mentors.indexOf(mentor);
    this.mentors[index].modifiedDate = moment.now();
    this.mentors[index].expertise = expertise;
    return this.mentors[index];
  }

  /**
     *
     * @param {integer} id
     */
  delete(id) {
    const mentor = this.findOne(id);
    const index = this.mentors.indexOf(mentor);
    this.mentors.splice(index, 1);
    return {};
  }
}


export default new Mentor();
