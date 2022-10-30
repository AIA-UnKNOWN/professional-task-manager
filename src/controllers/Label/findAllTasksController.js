const { Task } = require('@models');

const findAllTasksController = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { label_id: req.params.labelId },
    });
    res.status(200).json(tasks);
  } catch(error) {
    res.status(500).json({
      message: `Task find all by label id error: ${error}`
    });
  }
}

module.exports = findAllTasksController;