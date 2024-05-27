const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Sample data
let products = [
  { id: 1, name: 'Cocunt Choco Cookies', price: 200, quantity: 10 },
  { id: 2, name: 'Oats Almond Cookies', price: 350, quantity: 15 },
  { id: 3, name: 'Choco Chips Cookies', price: 399, quantity: 20 },
];

let cart = [];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Add to cart
app.post('/api/cart', (req, res) => {
  const { id, quantity } = req.body;
  const product = products.find((p) => p.id === id);

  if (product && product.quantity >= quantity) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    product.quantity -= quantity;
    res.status(200).json(cart);
  } else {
    res.status(400).json({ error: 'Product not available in sufficient quantity.' });
  }
});

// Remove from cart
app.delete('/api/cart/:id', (req, res) => {
  const { id } = req.params;
  const index = cart.findIndex((item) => item.id === parseInt(id));
  if (index !== -1) {
    const [removedItem] = cart.splice(index, 1);
    const product = products.find((p) => p.id === parseInt(id));
    product.quantity += removedItem.quantity;
    res.status(200).json(cart);
  } else {
    res.status(404).json({ error: 'Item not found in cart.' });
  }
});

// Increment quantity in cart
app.patch('/api/cart/:id/increment', (req, res) => {
  const { id } = req.params;
  const cartItem = cart.find((item) => item.id === parseInt(id));
  const product = products.find((p) => p.id === parseInt(id));

  if (cartItem && product && product.quantity > 0) {
    cartItem.quantity++;
    product.quantity--;
    res.status(200).json(cart);
  } else {
    res.status(400).json({ error: 'Product not available or quantity exceeded.' });
  }
});

// Decrement quantity in cart
app.patch('/api/cart/:id/decrement', (req, res) => {
  const { id } = req.params;
  const cartItem = cart.find((item) => item.id === parseInt(id));
  const product = products.find((p) => p.id === parseInt(id));

  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
    product.quantity++;
    res.status(200).json(cart);
  } else {
    res.status(400).json({ error: 'Quantity cannot be less than 1.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
