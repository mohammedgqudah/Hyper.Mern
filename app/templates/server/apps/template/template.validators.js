const Joi = require('@hapi/joi');

module.exports.SAMPLE = Joi.object()
    .options({ abortEarly: false })
    .keys({
        // e.g name: Joi.string().required(),
    });