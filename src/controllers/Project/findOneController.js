const Project = require('@models/Project');

const findOneController = async (req, res) => {
  try {
    const project = await Project.findAll({
      where: { id: req.params.projectId }
    });
    res.status(200).json(project);
  } catch(error) {
    res.status(500).json({
      message: `Find a project error: ${error}`
    });
  }
}

module.exports = findOneController;