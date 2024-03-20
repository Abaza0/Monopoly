const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Dahaby!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


let listings = [
    { id: 1, type: 'bar', weight: '1kg', purity: '99.99%', price: '50000',  },
    // Add more listings as needed
  ];
  
  app.get('/listings', (req, res) => {
    res.json(listings);
  });

  
  let transactions = [];

app.post('/transaction', (req, res) => {
  // Simplified example. In practice, validate and sanitize input data.
  const { buyerId, sellerId, listingId, status } = req.body;
  transactions.push({ buyerId, sellerId, listingId, status, timestamp: new Date() });
  res.send('Transaction recorded');
});
