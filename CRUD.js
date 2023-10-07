const express = require('express');
const pool =require('./db-connection');

const app = express();

app.get('/get', async (req, res) => {
  try {
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//TODO AKASH VHOTKAR TO ADD UPDATE DELETE ADD ADDMANY FUNCTIONALITY

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
