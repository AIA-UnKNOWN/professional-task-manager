const { Project, Task } = require('@models');

const findAllController = async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: {
        model: Task,
        as: 'tasks',
      }
    });
    res.status(200).json(projects);
  } catch(error) {
    res.status(500).json({
      message: `Find all projects error: ${error}`
    });
  }
}

module.exports = findAllController;