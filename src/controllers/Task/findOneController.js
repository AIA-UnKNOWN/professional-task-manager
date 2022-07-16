const Task = require('@models/task');

const findOneController = async (req, res) => {
  try {
    const task = await Task.findAll({ where: { id: req.params.taskId } });
    res.status(200).json(task[0] || {});
  } catch(error) {
    res.status(500).json({
      message: `Find a task error: ${error}`
    });
  }
}

module.exports = findOneController;