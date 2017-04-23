const express = require('express');
const bodyParser = require('body-parser');


var app = express()

const IP = '127.0.0.1';
const PORT = 5151;

// app.get('/', function (req, res) {
//   res.send('Hello World from express!')
// })
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/src/client/index.html');
// });
// app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/src/client'));


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`)
})
