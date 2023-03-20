const express = require('express');
var path = require('path');
var sphp = require('sphp');
const app = express();

app.use(sphp.express('public/'));
app.use(express.static('public/'));

app.use(express.json());

const cors = require('cors');
app.use(
  cors({
    origin: "*",
  })
);

app.get('/', function(req, res) {
  res.sendFile(path.resolve('index.php'));
});

// var exec = require("child_process").exec;
// app.get('/', function(req, res){exec("php ./index.php", function (error, stdout, stderr) {res.send(stdout);});});

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`app running at ${PORT}`);

})
