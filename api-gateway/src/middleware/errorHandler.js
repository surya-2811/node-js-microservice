module.exports = (err, req, res, next) => {
    console.error(`[${req.correlationId}]`, err);

    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        correlationId: req.correlationId
    });
};