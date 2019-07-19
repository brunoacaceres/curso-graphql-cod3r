// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'projeto-final',
    user:     'root',
    password: 'senha123'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
