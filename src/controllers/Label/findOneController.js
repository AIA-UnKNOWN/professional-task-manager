const { Label } = require('@models');

const findOneController = async (req, res) => {
  try {
    const label = await Label.findAll({
      where: { id: req.params.labelId }
    });
    res.status(200).json(label[0] || {});
  } catch(error) {
    res.status(500).json({
      message: `Find label error: ${error}`
    });
  }
}

module.exports = findOneController;