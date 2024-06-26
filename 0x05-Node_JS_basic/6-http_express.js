const express = require('express');

const app = express();
const PORT = 1245;
/**
 *create a small HTTP server using Express module
 *
 */

// Route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handling 404 errors
app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET ${req.url}</pre>
</body>
</html>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
