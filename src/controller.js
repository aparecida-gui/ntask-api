import Task from './task';

const showTask = (req, res) => {
  try {
    Task.find()
      .exec()
      .then(tasks => {
        res.status(200).json({ tasks })
      }
      )
  } catch (error) {
    res.status(400).json({
      status: error
    })
  }
  
}

const createTask = (req, res, next) => {

  const task = new Task({
    name: req.body.name,
    date: req.body.date
  });

  try {
    task.save()
      .then(
        res.status(201).json({
          status: 'Tarefa criada',
          createTask: task
        })
      )
  } catch (error) {
    res.status(400).json({
      status: 'A tarefa não foi criada.'
    })
  }
  next();
}

const changeTask = (req, res, next) => {
  res.status(200).json({
    status: 'metodo changeTask'
  })
  next();
}

const deleteTask = (req, res) => {
  const id = req.params.id;

  try {
    Task.deleteOne({ _id: id }).then(id => {
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

const checksUser = (req, res, next) => {
  res.status(200).json({
    status: 'metodo checksUser'
  })
  next();
}

export default {
  showTask,
  createTask,
  changeTask,
  deleteTask,
  checksUser
}
