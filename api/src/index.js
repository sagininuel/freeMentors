/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index';
import errorHandler from './middlewares/errorHandler';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'babel-polyfill';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use('/api', apiRoutes);
app.use('*', (req, res) => res.status(404).json({ status: 404, error: 'Page Not Found' }));

app.use(errorHandler.sendError);
app.listen(port, () => console.log(`Hey Sagini, am listening on port ${port}!`));

export default app;
