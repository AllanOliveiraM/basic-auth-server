import express from "express";
import * as bcrypt from "bcrypt";
const saltRounds = 10;

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const db = {
  email: "teste@email.com",
  password: "$2b$10$YLcApyJjewsDl8iCq69aAe3YInjm/iFIR41aCXcHidduk4cdMGzwW",
};

var loginValido: boolean | null = null;

app.post("/login", async (request, response) => {
  //Estudar rest e verbos http



  if (db.email !== request.body.email) {
    response.send("Login inválido");
    // console.log("request.body");
    return;
  }

  const isvalidpassword = await bcrypt.compare(
    request.body.password,
    db.password
  );

  if (!isvalidpassword) { //! inverte valores booleanos
    response.send("Login inválido");
    // console.log("request.body");
    return;
  }

  loginValido = true
  response.send("Login com sucesso");
});
app.get("/secret", (request, response) => {
  if (loginValido == true) {
    response.send("olá mundo");
  }
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});