const Label = require('@models/label');

const findAllController = async (req, res) => {
  try {
    const labels = await Label.findAll();
    res.status(200).json(labels);
  } catch(error) {
    res.status(500).json({
      message: `Label find all error: ${error}`
    });
  }
}

module.exports = findAllController;