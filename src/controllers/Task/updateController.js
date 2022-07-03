const Task = require('@models/Task');

const updateController = async (req, res) => {
  try {
    const task = await Task.findAll({ where: { id: req.params.taskId } });
    await Task.update({
      title: req.body.title || task.title,
      description: req.body.description || task.description,
      is_completed: req.body.is_completed || task.is_completed,
      label_id: req.body.label_id || task.label_id,
      priority_id: req.body.priority_id || task.priority_id,
    }, {
      where: { id: req.params.taskId }
    });
    res.sendStatus(200);
  } catch(error) {
    res.status(500).json({
      message: `Task update error: ${error}`
    });
  }
}

module.exports = updateController;