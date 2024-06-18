const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello Holberton School!"
  res.end('Hello Holberton School!\n');
});

// Server listens on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});

// Export the app variable
module.exports = app;
