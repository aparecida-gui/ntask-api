import express from 'express';
import controller from './controller';
const router = express.Router();

router.get('/', controller.showTask);

router.post('/', controller.createTask);
router.put('/:idTask', controller.changeTask);
router.delete('/:idTask', controller.deleteTask);
router.get('/', controller.checksUser);

export default router;