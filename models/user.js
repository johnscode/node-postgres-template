var env = process.env.NODE_ENV || "development";

const logger = require('../logger');
const config = require('../config/config');
const uuid = require('uuid');
const { Sequelize } = require('sequelize');


module.exports.initDb = async function () {
  var sequelize = new Sequelize(`postgres://${config.postgres.user}:${config.postgres.pass}@${config.postgres.host}:${config.postgres.port}/${config.postgres.db}`)

  try {
    await sequelize.authenticate();
    logger.info('user pg connection has been established successfully.');
  } catch (error) {
    logger.error(`Unable to connect to the database: ${error}`);
  }
}

module.exports.findByUsername = function (username) {
  return {
    id:"gegerwgrwg",
    first_name: 'admin',
    last_name: 'god',
    username: 'god'
  }
}

module.exports.findByUserId = function (username) {
  return {
    first_name: 'admin',
    last_name: 'god',
    username: 'god'
  }
}

module.exports.deleteUsers = function () {

}
