const Task = require('@controllers/Task');

const taskRoutes = app => {
  /* Add your routes here */
  app.get('/task/:taskId', Task.findOneController);
  app.post('/task/create', Task.createController);
  app.put('/task/:taskId/update', Task.updateController);
}

module.exports = taskRoutes;