const express = require("express");
const app = express();
const port = process.env.PORT || 8888

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/apia", (req, res) => {
  res.send("<h1>Hello World!</h1>");
})

app.listen(port, ()=>{
  console.log(`App listen on port http://localhost:${port}`);
})