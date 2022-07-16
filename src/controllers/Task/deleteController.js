const Task = require('@models/task');

const deleteController = async (req, res) => {
  try {
    await Task.destroy({
      where: { id: req.params.taskId }
    });
    res.sendStatus(200);
  } catch(error) {
    res.status(500).json({
      message: `Task delete error: ${error}`
    });
  }
}

module.exports = deleteController;