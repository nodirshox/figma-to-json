const Minio = require('minio');
const { CONFIG } = require("../config");

const s3Client = new Minio.Client({
    endPoint: CONFIG.S3_ENDPOINT,
    useSSL: false,
    port: 9000,
    accessKey: CONFIG.S3_ACCESS_KEY,
    secretKey: CONFIG.S3_SECRET_KEY
});

module.exports = s3Client;
