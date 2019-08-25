/* eslint-disable linebreak-style */
import 'babel-polyfill';
import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/index';

describe('API', () => {
  it('Should return JSON responses', (done) => {
    request(app)
      .get('/api')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.include.keys('message');
        expect(res.body.message).to.equal('Welcome to Free Mentors API');

        done(err);
      });
  });

  it('Should return JSON responses', (done) => {
    request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.include.keys('message');
        expect(res.body.message).to.equal(
          'Welcome to version 1 of Free Mentors API',
        );

        done(err);
      });
  });
});
