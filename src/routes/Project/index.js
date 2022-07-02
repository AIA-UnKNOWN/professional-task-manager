const Project = require('@controllers/Project');

const projectRoutes = app => {
  /* Add your routes here */
  app.post('/project/create', Project.createController);
}

module.exports = projectRoutes;