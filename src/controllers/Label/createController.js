const { Label } = require('@models');

const createController = async (req, res) => {
  try {
    const newlyCreatedLabel = await Label.create({ name: req.body.name });
    res.status(201).json(newlyCreatedLabel);
  } catch(error) {
    res.status(500).json({
      message: `Label create error: ${error}`
    });
  }
}

module.exports = createController;