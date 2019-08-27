# freeMentors

[![Build Status](https://travis-ci.org/sagininuel/freeMentors.svg?branch=develop)](https://travis-ci.org/sagininuel/freeMentors)

[![Coverage Status](https://coveralls.io/repos/github/sagininuel/freeMentors/badge.svg)](https://coveralls.io/github/sagininuel/freeMentors)

[![Maintainability](https://api.codeclimate.com/v1/badges/11e3a2851c06ed2cf962/maintainability)](https://codeclimate.com/github/sagininuel/freeMentors/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/11e3a2851c06ed2cf962/test_coverage)](https://codeclimate.com/github/sagininuel/freeMentors/test_coverage)

Free Mentors is a social initiative where accomplished professionals become role models to young people to provide free mentorship sessions.

# Features

## Core Features

- User can sign up.
- User can sign in.
- User can view all mentors.
- User can view a specific mentornp
- User can create a mentorship session request with a mentor
- Mentor can accept a session
- Mentor can decline a session
- Admin can change a user to a mentor

## Extra Features

- User can reset password.
- User can review a mentor
- Admin can delete a review deemed as inappropriate
- Mentor can view all his session requests
- Users can view all their mentorship sessions

## Links

- UI Templates can be found [here]https://sagininuel.github.io/freeMentors/UI/templates/landingPage.html
- APIs are hosted on Heroku [here]
- API documentation can be found [here]
- This project is managed with Pivotal Tracker [here]https://www.pivotaltracker.com/n/projects/2380917

# Getting Started

To have this application running on your computer, follow the following steps

### Prerequisites

- You need to have [Node.js](nodejs.org) installed

### Installing

- Clone or download this repository using
- Run `npm install` to install all the application's dependencies
- Set the following environment variables in your `.env` file:

  - `PORT` - An Integer specifying the PORT your application will run on.

  - `SECRET_KEY` - A random string used for generation authorization tokens.

  - `BASE_URL` - It should be formated thus: http(s)://(host)(:port)(TLD)/api/v1
    Example:

```
   http://localhost:3000/api/v1 or https://cheki.herokuapp.com/api/v1

```

### Running The Tests

#### Testing Locally

- Run `npm run test`

#### Testing With Postman

- Install [Postman](https://getpostman.com).
- View the api endpoints [here](cheki.herokuapp.com/api/v1/docs).

## Built With

- [Node.Js](https://nodejs.org)
- [ExpressJs](https://expressjs.com)

### Testing Tools

- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [nyc](https://www.npmjs.com/package/nyc)
- [Istanbul](https://www.npmjs.com/package/istanbul)

### Coding Style

- [AirBnB](https://github.com/airbnb/javascript)

## Author

- [ Sagini Emmanuel ](https://github.com/sagininuel)
