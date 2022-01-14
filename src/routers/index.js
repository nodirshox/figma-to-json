const express = require('express');
const router = express.Router();

const { FigmaRouter } = require('./figma');

// authorization
router.use('/v1/figma', FigmaRouter);

// error handling for unknown routes
router.use('*', (req, res) => {
    res.status(404).json({ message: 'Path does not exist' });
});

exports.router = router;
