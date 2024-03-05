const { DataTypes } = require('sequelize');
const conn = require('../db/conn');

const Cartao = conn.define('Cartao', {
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomeTitular: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  validadeMes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  validadeAno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cvv: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Cartao;
