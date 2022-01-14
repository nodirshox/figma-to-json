require('dotenv').config();
const express = require('express');
const { router } = require('./routers');
const { logger } = require('./loaders/logger');
const app = express();

// middleware
app.use(async function (req, res, next) {
    logger.info(`Request: [${req.method}]${req.originalUrl}`, { params: req.query, body: req.body });
    next();
});

app.use('/', router);

app.use(function (err, res, res, next) {
    logger.error(`Error occured: ${err.message}`, err);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
});

const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`App has started on http://localhost:${PORT}`);
});

process.on("uncaughtException", function(error) {
    logger.error("Server crashed", error);
    process.exit(1);
});
