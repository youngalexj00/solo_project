const express = require('express')
const app = express();
const path = require('path');
const db = require(path.resolve(__dirname, './models/dbModel.js'))
const bodyParser = require('body-parser');
const PORT = 3000;

//routes
const apiRouter = require('./routes/api');

//global middlware
app.use(bodyParser.json());

//serve static files and build
app.use(express.static(__dirname));
app.use('/build', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//handle api requests
app.use('/api', apiRouter);

app.use((req, res) => {
  res.status(404).send('error, endpoint not found');
})

app.listen(3000, (req, res) => console.log('server running on port '+PORT));