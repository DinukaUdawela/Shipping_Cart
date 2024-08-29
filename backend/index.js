const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());


// Import hardcoded data
const { products, categories } = require('./data');

// Define the API endpoints
app.get('/categories', (req, res) => {
    res.json(categories);
});

app.get('/products', (req, res) => {
    res.json(products);
});

// Optional: Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Shopping Cart API');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
