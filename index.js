const express = require("express")

const app = express()

app.use(express.json())

const cursos = ['Node', 'React', 'Next']

app.use((request, response, next) => {
  console.log(`URL CHAMADA ${request.method}`)

  return next();
})

app.get('/cursos', (request, response) => {
  return response.json(cursos)
})

app.get('/cursos/:index', (request, response) => {
  const { index } = request.params

  return response.json(cursos[index])
})

app.post('/cursos', (request, response) => {
  const { name } = request.body;
  cursos.push(name)

  return response.json(cursos)
})

app.put('/cursos/:index', (request, response) => {
  const { index } = request.params;
  const { name } = request.body;

  cursos[index] = name;
  return response.json(cursos)
})

app.delete('/cursos/:index', (request, response) => {
  const { index } = request.params;

  cursos.splice(index, 1);
  return response.json(cursos)
})

app.listen(3333)