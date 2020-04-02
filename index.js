const express = require("express");

const gitExtension =
  vscode.extensions.getExtension < GitExtension > "vscode.git".exports;
const git = gitExtension.getAPI(1);

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("ola mundo express"));
app.listen(port, () => console.log("Api rodando na porta 3000"));
