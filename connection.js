const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'suresh',
    database: 'typeorm_db'
});

module.exports = client;