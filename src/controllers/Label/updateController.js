const Label = require('@models/label');

const updateController = async (req, res) => {
  try {
    const label = await Label.findAll({ where: { id: req.params.labelId } });
    await Label.update({
      name: req.body.name || label.name
    }, {
      where: { id: req.params.labelId }
    });
    res.sendStatus(200);
  } catch(error) {
    res.status(500).json({
      message: `Label update error: ${error}`
    });
  }
}

module.exports = updateController;