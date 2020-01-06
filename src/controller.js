console.log('hello controller');

const showTask = (req, res, next) => {
  res.status(200).json({
    status: 'metodo showTask'
  })
  next();
}

const createTask = (req, res, next) => {
  res.status(200).json({
    status: 'metodo createTask'
  })
  next();
}

const changeTask = (req, res, next) => {
  res.status(200).json({
    status: 'metodo changeTask'
  })
  next();
}

const deleteTask = (req, res, next) => {
  res.status(200).json({
    status: 'metodo deleteTask'
  })
  next();
}

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
