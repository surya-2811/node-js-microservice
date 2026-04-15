require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Auth service working');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Auth Service running on ${PORT}`);
});