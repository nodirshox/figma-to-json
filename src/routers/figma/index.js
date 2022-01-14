const express = require('express');
const router = express.Router();

// login
router.get('/hello', async (req, res, next) => {
    try {
        return res.json({ message: true });    
    } catch (error) {
        next(error);
    }
});

exports.FigmaRouter = router;