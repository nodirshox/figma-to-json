const { CONFIG } = require('../config');
const { logger } = require('../loaders/logger');
const { fetchData } = require('../utils/fetch-data');
const { s3 } = require('../utils/upload-file');

exports.figma = {
    get: async (request) => {
        try {
            const loalJson = await fetchData.download(request.token, request.url);
            const uploadedJson = await s3.upload(loalJson);
            const fullPath = `${CONFIG.S3_FULL_ENDPOINT}/${CONFIG.S3_BUCKET_NAME}/${uploadedJson}`;

            return fullPath;
        } catch (error) {
            logger.error(`Error on responding JSON URL: ${request}, ${error.message}`);
            return null;
        }
    }
}
