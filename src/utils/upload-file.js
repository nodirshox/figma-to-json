const fs = require('fs');
const s3Client = require('../loaders/s3');
const { CONFIG } = require('../config');
const { logger } = require('../loaders/logger');

exports.s3 = {
  upload: async (filename) => {
    try {
      let fullFileName = `./tempFiles/${filename}`;
      // check file
      let fileStat = fs.stat(fullFileName, (err) => {
        if (err) new Error(`Error the reading the local file: ${filename}`);
      })
      // check bucket is exists
      
      // upload file
      const metaData = {
        'Content-Type': 'application/json'
      }

      let uploadFile = new Promise((resolve, reject) => {
        s3Client.fPutObject(CONFIG.S3_BUCKET_NAME, filename, fullFileName, metaData, function(err, objInfo) {
          if (err) reject(new Error("Error occured on uploading file", err.message));
          logger.debug(`JSON uploaded`, filename);

          // delete file
          fs.unlink(fullFileName, (err) => {
              if (err) reject(new Error("Error occured on deleting the file", filename));
          });
          resolve();
        });
      });

      await uploadFile;

      return filename;
    } catch (error) {
      logger.error(`Error on uploading json: ${filename}`, error.message);
      throw new Error(error.message);
    }
  }
}