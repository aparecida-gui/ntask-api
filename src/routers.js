import express from 'express';
import UserController from './UserController';
import TaskController from './TaskController';
import SendEmailController from './SendEmailController';
const router = express.Router();
//import verifyToken from './verifyAuth';

router.post('/user/register', UserController.checksUser);
router.post('/user/authenticate', UserController.authenticationUser);
router.post('/recover', SendEmailController.sendEmail);
//router.use(verifyToken);
router.get('/', TaskController.showTask);
router.post('/', TaskController.createTask);
router.put('/:idTask', TaskController.changeTask);
router.delete('/:idTask', TaskController.deleteTask);

export default router;
