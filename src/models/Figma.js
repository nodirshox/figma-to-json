const Joi = require('joi');

exports.figmaRequestSchema = Joi.object({
    url: Joi.string().required(),
    token: Joi.string().required(),
});
