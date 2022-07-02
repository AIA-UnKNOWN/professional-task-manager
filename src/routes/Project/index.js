const Project = require('@controllers/Project');

const projectRoutes = app => {
  /* Add your routes here */
  app.get('/projects', Project.findAllController);
  app.get('/project/:projectId', Project.findOneController);
  app.post('/project/create', Project.createController);
  app.delete('/project/:projectId/delete', Project.deleteController);
  app.put('/project/:projectId/update', Project.updateController);
}

module.exports = projectRoutes;