const { Project } = require('@models');

const deleteController = async (req, res) => {
  try {
    await Project.destroy({
      where: { id: req.params.projectId }
    });
    res.sendStatus(200);
  } catch(error) {
    res.status(500).json({
      message: `Project deletion error: ${error}`
    });
  }
}

module.exports = deleteController;