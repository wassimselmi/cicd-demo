const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Project should be launched Soon! 🛠️');
});

app.get('/test', (req, res) => {
  res.send('more test inc! 🛠️');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
