const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  port: 5432,
  database: 'todolist',
  password: 'postgres',
});

pool.on('connect', () => {
  console.log('Conectado ao banco de dados com sucesso!');
});

pool.on('error', (err) => {
  console.error('Erro na conexão com o banco de dados:', err);
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  pool: pool,
};
