require('module-alias/register');
const express = require('express');
const app = express();
const PORT = 3000;

const registerRoutes = require('@routes');

app.use(express.json());

registerRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});