const { Task } = require('@models');

const createController = async (req, res) => {
  const { title, description, project_id, label_id, priority_id } = req.body;
  try {
    const newlyCreatedTask = await Task.create({
      title,
      description: description || null,
      project_id,
      label_id:label_id || null,
      priority_id: priority_id || null
    });
    res.status(201).json(newlyCreatedTask);
  } catch(error) {
    res.status(500).json({
      message: `Task creation error: ${error}`
    });
  }
}

module.exports = createController;