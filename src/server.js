const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from React's build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle client-side routing by sending index.html for all non-static requests
app.get('/*any', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production server is running on http://localhost:${PORT}`);
});
