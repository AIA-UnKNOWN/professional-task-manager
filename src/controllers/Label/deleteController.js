const Label = require('@models/Label');

const deleteController = async (req, res) => {
  try {
    await Label.destroy({ where: { id: req.params.labelId } });
    res.sendStatus(200);
  } catch(error) {
    res.status(500).json({
      message: `Label delete error: ${error}`
    });
  }
}

module.exports = deleteController;