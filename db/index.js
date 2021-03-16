const { Pool } = require('pg')
const connectionString="postgresql://doadmin:a5ruz097kqsk93xh@db-postgresql-nyc3-84214-do-user-8838963-0.b.db.ondigitalocean.com:25060/defaultdb"

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

// const pool = new Pool({
//   username: 'dodadmin',
//   host: 'db-postgresql-nyc3-84214-do-user-8838963-0.b.db.ondigitalocean.com',
//   database: 'defaultdb',
//   password: 'a5ruz097kqsk93xh',
//   port: 25060,
//   ssl:'true',
//   // host: 'localhost',
//   // database: 'lcnapp_test',
//   // password: '',
// })

module.exports = {
  async query(text, params) {
    const res = await pool.query(text, params)
    return res
  }
}
