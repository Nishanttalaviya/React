
const Pool= require("pg").Pool;

function connectionObj() {
    const pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "playerdb",
        password: "nishant2308",
        port: 5432,
        max: 20,
    });
    return pool;
}

module.exports = { connectionObj };
