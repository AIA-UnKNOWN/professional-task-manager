const Task = require('@controllers/Task');

const taskRoutes = app => {
  /* Add your routes here */
  app.post('/task/create', Task.createController);
}

module.exports = taskRoutes;