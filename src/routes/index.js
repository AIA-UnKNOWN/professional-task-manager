const Project = require('@models/Project');

const registerRoutes = app => {

  /* Register your routes here */

  app.get('/', (req, res) => {
    res.send('Task Manager server running!');
  });

  app.get('/test', (req, res) => {
    res.send('test');
  });

}

module.exports = registerRoutes;