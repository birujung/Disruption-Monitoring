const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database successfully.');
  }
});

module.exports = pool;