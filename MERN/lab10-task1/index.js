const express = require('express');
const connectToMongo = require('./db');

connectToMongo();

const app = express()
const port = 4000

app.use(express.json());


app.post('/', (req, res) => {
  res.send('Hello World!');
}
);

app.use('/create', require('./routes/create'));
app.use('/read', require('./routes/read'));
app.use('/update', require('./routes/update'));
app.use('/delete', require('./routes/delete'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})