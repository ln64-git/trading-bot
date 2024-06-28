// server/connect-db.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER || 'admin',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'mydatabase',
  password: process.env.PGPASSWORD || 'admin',
  port: Number(process.env.PGPORT) || 5432,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
    throw new Error('Failed to connect to PostgreSQL');
  }
};

export { pool, connectDB };
