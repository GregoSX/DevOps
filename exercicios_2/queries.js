const db = require('./db');

const getTasks = (request, response) => {
    db.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const getTaskById = (request, response) => {
    const id = parseInt(request.params.id);
    db.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const createTask = (request, response) => {
    const { name, description } = request.body;
    db.query(
        'INSERT INTO tasks (name, description) VALUES ($1, $2)',
        [name, description],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send(`Task added`);
        }
    );
};

const updateTask = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, description } = request.body;
    db.query(
        'UPDATE tasks SET name = $1, description = $2 WHERE id = $3',
        [name, description, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`Task modified with ID: ${id}`);
        }
    );
};

const deleteTask = (request, response) => {
    const id = parseInt(request.params.id);
    db.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Task deleted with ID: ${id}`);
    });
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
