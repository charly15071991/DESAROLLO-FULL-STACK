const { sequelize } = require("../../database/base");
const { DataTypes } = require("sequelize");

const  tablamod = sequelize.define("tablacuadro",{
    title:DataTypes.STRING,
    texto:DataTypes.TEXT,
    imagen:DataTypes.STRING,

});

module.exports = {tablamod};
