const { Project } = require('@models');

const findOneController = async (req, res) => {
  try {
    const project = await Project.findAll({
      where: { id: req.params.projectId }
    });
    res.status(200).json(project[0] || {});
  } catch(error) {
    res.status(500).json({
      message: `Find a project error: ${error}`
    });
  }
}

module.exports = findOneController;