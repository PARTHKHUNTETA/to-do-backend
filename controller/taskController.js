import { v4 as uuidv4 } from 'uuid';

let tasks = [];
export function getAllTask(req, res) {
    res.json(tasks)
}
export function createTask(req, res) {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    const newTask = { id: uuidv4(), title };
    tasks.push(newTask);
    res.status(201).json(newTask);
}
export function deleteTask(req, res) {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: 'Task deleted' });

}
export function deleteAllTask(req, res) {
    tasks.length = 0;
    res.status(200).json({ message: 'All Task deleted' });
}

export function updateTask(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is Required' });
    }
    const taskToBeUpdated = tasks.find(task => task.id === id);

    if (!taskToBeUpdated) {
        return res.status(404).json({ message: 'Task not found' });
    }
    taskToBeUpdated.title = title;
    res.status(200).json(taskToBeUpdated);
}
