import Task from './task';

const showTask = (req, res) => {
  try {
    Task.find()
      .exec()
      .then(tasks => {
        res.status(200).json({ tasks });
      });
  } catch (error) {
    res.status(400).json({
      status: error
    });
  }
};

const createTask = (req, res) => {
  const task = new Task({
    name: req.body.name,
    date: req.body.date
  });

  try {
    task.save().then(
      res.status(201).json({
        status: 'Tarefa criada',
        createTask: task
      })
    );
  } catch (error) {
    res.status(400).json({
      status: 'A tarefa não foi criada.'
    });
  }
};

const changeTask = (req, res) => {
  const idTask = req.params.id;
  try {
    Task.findByIdAndUpdate(idTask, {
      $set: { name: req.body.name }
    }).then(tastUpdate =>
      res.status(200).json({
        tastUpdate
      })
    );
  } catch (error) {
    res.status(404).json({
      message: 'Não foi alterado a tarefa'
    });
  }
};

const deleteTask = (req, res) => {
  const id = req.params.id;

  try {
    Task.remove({ _id: id }).then(id => {
      res.status(200).json({
        message: 'a tarefa foi removida com sucesso',
        id: id
      });
    });
  } catch (error) {
    res.status(400).json({
      message: 'O produto não foi removido',
      error: error
    });
  }
};

export default {
  showTask,
  createTask,
  changeTask,
  deleteTask
};
