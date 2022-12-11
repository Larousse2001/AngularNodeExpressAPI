const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/my-app/dist/angular-nodejs-example/"));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/my-app/dist/angular-nodejs-example/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});


const recipes = [];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/my-app/dist/angular-nodejs-example/"));

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.post('/api/recipes', (req, res) => {
  const user = req.body.article;
  users.push(recipe); //add
  res.json("recipe addedd");
});

app.put('/api/recipes', (req, res) => {
  const user = req.body.recipe;
  users.put(recipe); //update
  res.json("recipe updated");
});

app.delete('/api/recipes', (req, res) => {
  const user = req.body.recipe;
  users.delete(recipe); //delete
  res.json("recipe deleted");
});


