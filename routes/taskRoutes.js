import express from 'express';
import { createTask, deleteAllTask, deleteTask, getAllTask, updateTask } from '../controller/taskController.js'

const router = express.Router();

router.get('/',getAllTask)
router.post('/',createTask)
router.delete('/:id',deleteTask)
router.put('/:id',updateTask)
router.delete('/',deleteAllTask)


export default router;