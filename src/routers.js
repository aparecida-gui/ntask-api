import express from 'express';
import TaskController from './TaskController';
import UserController from './UserController';
const router = express.Router();

router.get('/', TaskController.showTask);

router.post('/', TaskController.createTask);
router.put('/:idTask', TaskController.changeTask);
router.delete('/:idTask', TaskController.deleteTask);
router.post('/user/register', UserController.checksUser);

export default router;