const Project = require('@controllers/Project');

const projectRoutes = app => {
  /* Add your routes here */
  app.get('/projects', Project.findAllController);
  app.post('/project/create', Project.createController);
}

module.exports = projectRoutes;