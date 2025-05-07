require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.send({ status: 'Backend API running' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
