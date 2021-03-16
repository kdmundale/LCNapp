const { Pool } = require('pg')
const connectionString="postgres://gioaaflxktcavy:ee76ee17b037cd235a754fa08f840e525c652ae95eb46061d342b48481575889@ec2-52-7-115-250.compute-1.amazonaws.com:5432/d3q5g6rp3m8srr"

// const pool = new Pool({
//   connectionString,
// })

const pool = new Pool({
  username: 'dodadmin',
  host: 'db-postgresql-nyc3-84214-do-user-8838963-0.b.db.ondigitalocean.com',
  database: 'defaultdb',
  password: 'a5ruz097kqsk93xh',
  port: 25060,
  ssl:'true',
  // host: 'localhost',
  // database: 'lcnapp_test',
  // password: '',
})

module.exports = {
  async query(text, params) {
    const res = await pool.query(text, params)
    return res
  }
}
