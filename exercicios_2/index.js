const express = require('express');
const app = express();
const port = 3000;

const query = require('./queries');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/tasks', query.getTasks);
app.get('/tasks/:id', query.getTaskById);
app.post('/tasks', query.createTask);
app.put('/tasks/:id', query.updateTask);
app.delete('/tasks/:id', query.deleteTask);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
