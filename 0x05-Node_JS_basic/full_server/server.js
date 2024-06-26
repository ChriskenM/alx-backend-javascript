// full_server/server.js

import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

app.use('/', routes);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;

