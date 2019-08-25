import express from 'express';
import bodyParser from 'body-parser';

import 'babel-polyfill';

//  Set up the express app
const app = express();

//  Set up the server
const port = 3000;
app.listen(port, () => {
  console.log(`Yoh, Sagini am listening on port ${port}!`);
});
