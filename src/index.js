require('dotenv').config();
const { CONFIG } = require('./config');

const app = require('./server.js');
const PORT = parseInt(CONFIG.HTTP_PORT);
const { logger } = require('./loaders/logger');

app.listen(PORT, () => {
    logger.info(`App has started on http://localhost:${PORT}`);
});

process.on("uncaughtException", function(error) {
    logger.error("Server crashed", error);
    process.exit(1);
});
