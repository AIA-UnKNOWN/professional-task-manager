const { Label, Task } = require('@models');

const findAllController = async (req, res) => {
  try {
    const labels = await Label.findAll({
      include: {
        model: Task,
        as: 'tasks',
      }
    });
    res.status(200).json(labels);
  } catch(error) {
    res.status(500).json({
      message: `Label find all error: ${error}`
    });
  }
}

module.exports = findAllController;