/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// import 'babel-polyfill';
import request from 'supertest';
import { expect } from 'chai';
import mockData from '../../utils/mockData';
import app from '../../../src/index';

//  Object de-structuring
const { validUserDetails, invalidUserDetails } = mockData.signUp;

describe('Auth routes: Signup', () => {
  it('should add a new user', (done) => {
    request(app)
      .post('/api/v1/auth/signUp')
      .set('Accept', 'application/json')
      .send({ ...validUserDetails })
      .end((err, res) => {
        // console.log(res);
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.be.a('object');
        done(err);
      });
  });

  it('should check if user already exists', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send({ ...validUserDetails })
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.include.keys('error');
        expect(res.body.error).to.equal(
          'Sorry, this Email is already registered',
        );

        done(err);
      });
  });

  it('should return errors for invalid fields', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send({ ...invalidUserDetails })
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.include.keys('errors');

        done(err);
      });
  });

  it('should return error of missing name field', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send({ ...invalidUserDetails })
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body.errors[0].param).to.equal('firstname');

        done(err);
      });
  });

  it('should return error for mismatch of password', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send({ ...invalidUserDetails })
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.include.keys('errors');

        done(err);
      });
  });
});
