const express = require('express');
const app = express();
const port = 3000;

// Route dasr (metode Get)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Menyalakan Server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});