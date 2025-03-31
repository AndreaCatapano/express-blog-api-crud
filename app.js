const express = require("express");
const postRouter = require("./router/post.js")
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('../public'))
app.use("/posts", postRouter);


app.listen(port, function (){ console.log("Server Attivo")})