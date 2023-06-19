const express = require('express');
const app = express();
const blagues = require('./blague.json');
app.use(express.json());

app.get('/blagues', (req, res) => {
  res.json(blagues.Blagues);
});

app.get('/blagues/alea', (req, res) => {
  const randomJoke = blagues.Blagues[Math.floor(Math.random() * blagues.Blagues.length)];
  res.json(randomJoke);
});

app.get('/blagues/:id', (req, res) => {
  const jokeId = parseInt(req.params.id);
  const joke = blagues.Blagues.find((joke) => joke.id === jokeId);

  if (joke) {
    res.json(joke);
  } else {
    res.status(404).json({ error: 'Joke not found' });
  }
});

app.listen(3000, () => {
  console.log('Serveur de Willy connecté au port 3000');
});
