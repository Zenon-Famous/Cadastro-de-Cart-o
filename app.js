const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const conn = require("./db/conn");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//public html
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Rota para lidar com a submissão do formulário
app.post('/', (req, res) => {

  const numero = req.body.cardNumberBox;
  const nomeTitular = req.body.cardName;
  const validadeMes = req.body.Mesbtn;
  const validadeAno = req.body.AnoInput;
  const cvv = req.body.cvvbtn;

});

// Sincronizar o banco de dados e iniciar o servidor
conn
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
})
.catch((err) => console.log(err));
