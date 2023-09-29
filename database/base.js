const Sequelize  = require('sequelize');

const sequelize = new Sequelize('base', 'root','', {
    host: 'localhost',
    dialect:'mysql',
    port: 3306
  });

module.export = {sequelize}



