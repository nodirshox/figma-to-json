// const { v4: uuidv4 } = require('uuid');
const { fetchData } = require('../utils/fetch-data');

exports.figma = {
    get: async (request) => {
        const jsonResponse = await fetchData.download(request.token, request.url);

        return jsonResponse;
    }
}
