const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.json({ message: 'Login route working (not implemented yet)' });
});

router.post('/register', (req, res) => {
    res.status(201).json({ message: 'Register route working (not implemented yet)' });
});

router.post('/refresh-token', (req, res) => {
    res.json({ message: 'Refresh token route working (not implemented yet)' });
});

module.exports = router;