import express from 'express';
import createPost from './helpers.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const post = createPost('My first Post', 'Abraham');
  res.send(post);
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
