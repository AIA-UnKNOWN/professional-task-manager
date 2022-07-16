const Task = require('@models/task');

const createController = async (req, res) => {
  const { title, description, project_id, label_id, priority_id } = req.body;
  try {
    await Task.create({
      title,
      description: description || null,
      project_id,
      label_id:label_id || null,
      priority_id: priority_id || null
    });
    res.sendStatus(201);
  } catch(error) {
    res.status(500).json({
      message: `Task creation error: ${error}`
    });
  }
}

module.exports = createController;