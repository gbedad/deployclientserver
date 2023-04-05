const express = require("express");
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.get("/api/:name", (req, res) => {
  res.json({ message: `Hello from ${req.params.name} server!` });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on ${process.env.PORT || 3001}`);
});

app.use(express.static(path.join(__dirname, 'server/client/build')));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, './server/client/build', 'index.html'))
})