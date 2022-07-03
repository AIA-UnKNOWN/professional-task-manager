const Task = require('@models/Task');

const findAllController = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { project_id: req.body.project_id } });
    res.status(200).json(tasks);
  } catch(error) {
    res.status(500).json({
      message: `Find all tasks error: ${error}`
    });
  }
}

module.exports = findAllController;