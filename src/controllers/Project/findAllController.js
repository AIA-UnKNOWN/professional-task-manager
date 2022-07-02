const Project = require('@models/Project');

const findAllController = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch(error) {
    res.status(500).json({
      message: `Find all projects error: ${error}`
    });
  }
}

module.exports = findAllController;