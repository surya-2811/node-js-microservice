require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const { createProxyMiddleware } = require('http-proxy-middleware');
const authLimiter = require('./middleware/rateLimiter');
const globalLimiter = require('./middleware/rateLimiter');
const authMiddleware = require('./middleware/authMiddleware');
const correlationId = require('./middleware/correlationId');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(mongoSanitize());
app.use(globalLimiter);
app.use(correlationId)
app.use(errorHandler)

// Auth Service Proxy
// Auth routes (with login limiter)
app.use('/api/v1/auth/login', authLimiter);

app.use('/api/v1/auth', createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true
}));

// Post Service Proxy
app.use('/api/v1/posts', authMiddleware, createProxyMiddleware({
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