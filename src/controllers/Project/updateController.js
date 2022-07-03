const Project = require('@models/Project');

const updateController = async (req, res) => {
  try {
    await Project.update({ name: req.body.name }, {
      where: { id: req.params.projectId }
    });
    res.sendStatus(200);
  } catch(error) {
    res.send(500).json({
      message: `Project update error: ${error}`
    });
  }
}

module.exports = updateController;