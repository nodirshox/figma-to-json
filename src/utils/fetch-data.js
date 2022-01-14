const fetch = require('node-fetch');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { logger } = require("../loaders/logger");
const { CONFIG} = require('../config');

exports.fetchData = {
  download: async (token, url) => {
    try {
      const endpoint = CONFIG.FIGMA_ENDPOINT + "/v1/files/" + url;

      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-FIGMA-TOKEN': `${token}`
        }
      });
      const content = await response.buffer();
      const fileUUID = uuidv4();
      const timestamp = Date.now().toString();
      const fileName = `${timestamp}-${fileUUID}.json`;
      fs.writeFileSync(`./tempFiles/${fileName}`, content)

      return fileName;
    } catch (error) {
      logger.error(`Error on creating json from figma: ${token}, ${url}`);
      throw new Error(error.message);
    }
  }
}