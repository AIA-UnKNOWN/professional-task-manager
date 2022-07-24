const { Task } = require('@models');

const findAllController = async (req, res) => {
  try {
    console.log(req.params)
    const tasks = await Task.findAll({
      where: {
        project_id: req.query.projectId
      },
      order: [
        ['createdAt', 'DESC']
      ]
    });
    res.status(200).json(tasks);
  } catch(error) {
    res.status(500).json({
      message: `Find all tasks error: ${error}`
    });
  }
}

module.exports = findAllController;