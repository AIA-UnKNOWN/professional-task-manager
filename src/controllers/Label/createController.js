const { Label } = require('@models');

const createController = async (req, res) => {
  try {
    await Label.create({ name: req.body.name });
    res.sendStatus(201);
  } catch(error) {
    res.status(500).json({
      message: `Label create error: ${error}`
    });
  }
}

module.exports = createController;