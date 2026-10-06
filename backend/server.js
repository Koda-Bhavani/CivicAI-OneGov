const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'CivicAI-OneGov Backend Running Successfully! 🚀' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is healthy' });
});

// Sample API routes for CivicAI
app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, name: 'Aadhaar Services' },
    { id: 2, name: 'PAN Services' },
    { id: 3, name: 'Voter ID Services' }
  ]);
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  res.json({ reply: `You said: ${message}. This is CivicAI response!` });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`👉 http://localhost:${PORT}`);
});