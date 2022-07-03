const Label = require('@controllers/Label');

const labelRoutes = app => {
  /* Add your routes here */
  app.get('/labels', Label.findAllController);
  app.get('/label/:labelId', Label.findOneController);
  app.post('/label/create', Label.createController);
  app.delete('/label/:labelId/delete', Label.deleteController);
  app.put('/label/:labelId/update', Label.updateController);
}

module.exports = labelRoutes;