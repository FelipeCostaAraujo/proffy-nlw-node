import express from 'express';
import ClassesController from '../controllers/classes-controller';
import ConnectionController from '../controllers/connections-controller';

const router = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionController();

router.post('/classes', classesController.create);
router.get('/classes', classesController.index);

router.post('/connections', connectionsController.create);
router.get('/connections', connectionsController.index);

export default router;