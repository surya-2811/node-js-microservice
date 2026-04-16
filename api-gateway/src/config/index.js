module.exports = {
    PORT: process.env.PORT || 5000,
    AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
    POST_SERVICE_URL: process.env.POST_SERVICE_URL,
    RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 mins
    RATE_LIMIT_MAX: 100, // requests per window
}