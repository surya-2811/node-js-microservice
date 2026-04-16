const rateLimit = require('express-rate-limit');
const config = require('../config');

const globalLimiter = rateLimit({
    windowMs: config.RATE_LIMIT_WINDOW,
    max: config.RATE_LIMIT_MAX,
    message: 'Too many requests, please try again later',
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 5, // only 5 login attempts
    message: 'Too many login attempts, try later',
});

module.exports = { globalLimiter, authLimiter };