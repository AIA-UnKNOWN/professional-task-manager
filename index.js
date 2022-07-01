require('module-alias/register');
const express = require('express');
const app = express();
const PORT = 3000;

const registerRoutes = require('@routes');
const { initializeDatabase } = require('@models');

initializeDatabase();
registerRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});