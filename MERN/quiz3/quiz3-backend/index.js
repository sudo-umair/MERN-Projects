const connectToMongo = require('./db.js');
const express = require('express');
const cors = require('cors');
const router = require('./router');

connectToMongo();
const app = express()
app.use(express.json())
app.use(cors({ credentials: true, origin: true }))
app.use(router)

const port = 4060;

app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`)
})