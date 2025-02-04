import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.post("/login", (request, response) => {
  //Estudar rest e verbos http

  response.send("123");
});

app.get("/secret", (request, response) => {
  response.send("olá mundo");
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
