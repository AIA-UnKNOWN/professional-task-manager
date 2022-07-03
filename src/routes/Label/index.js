const Label = require('@controllers/Label');

const labelRoutes = app => {
  /* Add your routes here */
  app.get('/labels', Label.findAllController);
  app.post('/label/create', Label.createController);
  app.delete('/label/:labelId/delete', Label.deleteController);
}

module.exports = labelRoutes;