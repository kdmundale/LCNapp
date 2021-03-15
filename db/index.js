const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  database: 'lcnapp_test',
  password: '',
})

module.exports = {
  async query(text, params) {
    const res = await pool.query(text, params)
    return res
  }
}
