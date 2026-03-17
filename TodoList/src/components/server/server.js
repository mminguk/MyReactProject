const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 4000;

const corsOption = {
  origin: 'http://localhost:5173',
  credential: true,
};

let data = require('./todoList.json');

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todoList', (req, res) => {
  res.send(data);
});

app.post('/add', (req, res) => {
  const newTodo = req.body;
  if (data.id === req.body.id && data.title === req.body.title) {
    throw new Error('이미 추가했습니다.');
  }
  data.push(newTodo);
  fs.writeFileSync('./todoList.json', JSON.stringify(data, null, 2));
  res.send(newTodo);
});

app.delete('/delete_todo', (req, res) => {
  if (req.body.id) {
    data = data.filter((todo) => todo.id !== req.body.id);
  }
  data.map((todo) => (todo.id = todo.id - 1));
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
