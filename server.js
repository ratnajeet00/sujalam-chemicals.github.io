const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Create a new SQLite database instance
const db = new sqlite3.Database('products.db');

// Create the products table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    casNo TEXT,
    category TEXT
  )
`);

// API endpoint for adding a product
app.post('/api/products', (req, res) => {
  const { name, casNo, category } = req.body;

  // Insert the product into the database
  db.run(
    `INSERT INTO products (name, casNo, category) VALUES (?, ?, ?)`,
    [name, casNo, category],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add product' });
      } else {
        res.status(200).json({ message: 'Product added successfully' });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
