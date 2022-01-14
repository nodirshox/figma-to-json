const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const { figmaRequestSchema } = require('../../models/Figma');

// figma url to json
router.post('/', validator.body(figmaRequestSchema), async (req, res, next) => {
    try {
        return res.json({ message: true });    
    } catch (error) {
        next(error);
    }
});

exports.FigmaRouter = router;