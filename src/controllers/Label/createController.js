const { Label, Task } = require('@models');

const createController = async (req, res) => {
  try {
    const newlyCreatedLabel = await Label.create({ name: req.body.name });
    const label = await Label.findOne({
      where: { id: newlyCreatedLabel.id },
      include: {
        model: Task,
        as: 'tasks',
      },
    })
    res.status(201).json(label);
  } catch(error) {
    res.status(500).json({
      message: `Label create error: ${error}`
    });
  }
}

module.exports = createController;