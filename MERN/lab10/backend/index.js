const express = require('express')
const connectToMongo = require('./db');

connectToMongo();

const app = express();
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello HClass of Web2')
})

app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'));



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
