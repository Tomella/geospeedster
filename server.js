import express from "express";
import config from "./lib/config.js";

const app = express();
const port = config.port;
const directories = config.directory_mappings;

import Directory from "./services/directory.js"


Object.entries(directories).forEach(([name, value]) => {
  console.log(name,value);
  directories[name] = new Directory({path: value, name});
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})