import express from "express";

const app = express();

app.get("/login", (request, response) => {
  response.send("olá mundo");
});

app.listen(3000);
