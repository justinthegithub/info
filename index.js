const express = require('express');
const app = express();
const {readFile} = require('fs').promises;

app.use(express.static('public'));

app.get('/', async (request, response) => {
  response.send(await readFile('./home.html', 'utf8'));
})

app.get('/projects', async (request, response) => {
  response.send(await readFile('./projects.html', 'utf8'));
});

app.use(async (request, response) => {
  response.status(404).send(await readFile('./404.html', 'utf8'))
})



app.listen(process.env.PORT||3000, () => console.log('check out http://localhost:3000'))