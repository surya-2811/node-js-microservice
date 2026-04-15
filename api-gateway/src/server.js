require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Auth Service Proxy
app.use('/api/v1/auth', createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true
}));

// Post Service Proxy
app.use('/api/v1/posts', createProxyMiddleware({
    target: 'http://localhost:5002',
    changeOrigin: true
}));

app.get('/health', (req, res) => {
    res.send('API Gateway is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Gateway running on port ${PORT}`);
});