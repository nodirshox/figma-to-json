const { figma } = require('../data-access/figma');

exports.figmaService = {
    get: async (request) => {
        // some business logics will be added, if necessary
        const response = await figma.get(request);

        return response;
    }
}
