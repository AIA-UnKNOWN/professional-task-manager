const projectRoutes = require('./Project');
const taskRoutes = require('./Task');

const registerRoutes = app => {

  /* Register your routes here */

  app.get('/', (req, res) => {
    res.send('Task Manager server running!');
  });

  app.get('/test', (req, res) => {
    res.send('test');
  });

  projectRoutes(app);
  taskRoutes(app);

}

module.exports = registerRoutes;