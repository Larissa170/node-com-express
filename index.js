const express = require("express");
const app = express();
const port = 3000;

const gitExtension =
  vscode.extensions.getExtension < GitExtension > "vscode.git".exports;
const git = gitExtension.getAPI(1);

app.get("/", (req, res) => res.send("ola mundo express"));
app.listen(port, () => console.log("Api rodando na porta 3000"));
