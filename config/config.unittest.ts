exports.sequelize = {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
  password: '12345678',
  database: "egg-sequelize-doc-unittest",
};

// mysql -u root -p12345678 -e 'CREATE DATABASE IF NOT EXISTS `egg-sequelize-doc-default`;'
// mysql -u root -p12345678 -e 'CREATE DATABASE IF NOT EXISTS `egg-sequelize-doc-unittest`;'
