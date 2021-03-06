const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const { figmaRequestSchema } = require('../../models/Figma');
const { figmaService } = require('../../services/figma');

// figma url to json
router.post('/', validator.body(figmaRequestSchema), async (req, res, next) => {
    try {
        const requestDTO = req.body;
        const response = await figmaService.get(requestDTO);

        if (!response) {
            return res.status(400).json({ message: 'Invalid request' });
        }

        return res.json({ url: response });    
    } catch (error) {
        next(error);
    }
});

exports.FigmaRouter = router;