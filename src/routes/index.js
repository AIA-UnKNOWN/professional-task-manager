const registerRoutes = app => {

  /* Register your routes here */

  app.get('/', (req, res) => {
    res.send('Task Manager server running!');
  });

}

module.exports = registerRoutes;