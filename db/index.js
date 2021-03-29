const { Pool } = require('pg')

const pool = new Pool({
  host:process.env.PGHOST,
  database:process.env.PGDATABASE,
  password:process.env.PGPASSWORD,
  user:process.env.PGUSER,
  port:process.env.PGPORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  async query(text, params) {
    const res = await pool.query(text, params)
    return res
  }
}
