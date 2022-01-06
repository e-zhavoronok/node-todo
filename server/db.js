const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "notsafe",
    host: "localhost",
    port: 5432,
    database: "nodetodo"
});

module.exports = pool;