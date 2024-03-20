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
    {
      id: 1,
      type: 'bar',
      weight: '1kg',
      Karat: '24K',
      Purity: '99.99%', 
      price: '50000',
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes from now
    },
    // Add more listings as needed
  ];
  
  // Check every minute if any listing has expired
  setInterval(() => {
    const now = new Date();
    listings = listings.filter(listing => listing.expiresAt > now);
  }, 60 * 1000);
  
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


const GoldType = {
    BULLION: 'Bullion',
    BAR: 'Bar',
    COIN: 'Coin',
    SCRAP: 'Scrap',

    // Add more types 
  };
  
  const Karat = {
    K24: '24K',
    K22: '21K',
    K18: '18K',
    K14: '14K',

    
  };
  
  const Purity = {
    P9995: '99.95%',
    P995: '99.5%',
    P990: '99.0%',
    // Add more purities 
  };
  
