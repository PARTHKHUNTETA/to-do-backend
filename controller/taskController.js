import { v4 as uuidv4 } from 'uuid';
import { taskList } from '../mock/mockTask.js';

let tasks = [...taskList];
export function getAllTask(req, res) {
    const { priority, category } = req.query;
    let filteredTasks = tasks;
    if (priority) {
        filteredTasks = filteredTasks.filter(task => task.priority.toLowerCase() === priority.toLowerCase());
    }
    if (category) {
        filteredTasks = filteredTasks.filter(task => task.category.toLowerCase() === category.toLowerCase());
    }

    res.json(filteredTasks);
}
export function createTask(req, res) {
    const { title, priority, category } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    const newTask = { id: uuidv4(), title, priority: priority.toLowerCase() || 'medium', category: category.toLowerCase() || 'general' };
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
    const { title, priority, category } = req.body;
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    task.title = title || task.title;
    task.priority = priority || task.priority;
    task.category = category || task.category;

    res.status(200).json(task);
}
