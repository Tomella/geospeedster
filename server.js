import express from "express";
import config from "./lib/config.js";

const app = express();
const port = config.port;
const directories = {};

import Directory from "./services/directory.js"


config.directory_mappings.forEach((entry) => {
  directories[entry.name] = new Directory(entry);
});

app.use(express.static("web"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/list/:path", async (req, res) => {
  let dir = directories[req.params.path];
  
  console.log(req.params.path)
  if(dir) {
    let result = await dir.tree();
    res.send(result);
  } else {
    res.sendStatus(404);
  }

});

app.get("/available", async (req, res) => {
    res.send(config.directory_mappings.map(entry => ({name: entry.name, display: entry.display})));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})