const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');

router.post('/login', (req, res) => {
    res.json({ message: 'Login route working (not implemented yet)' });
});

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const user = await User.create({
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: 'User registered successfully',
            userId: user._id,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/refresh-token', (req, res) => {
    res.json({ message: 'Refresh token route working (not implemented yet)' });
});

module.exports = router;