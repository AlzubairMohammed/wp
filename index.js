const express = require('express');
var path = require('path');
const app = express();



app.use(express.json());

const cors = require('cors');
app.use(
  cors({
    origin: "*",
  })
);

app.get('/', function(req, res) {
  res.sendFile(path.resolve('index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`app running at ${PORT}`);

})
