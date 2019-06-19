const Joi = require('@hapi/joi');
module.exports.LOGIN_SCHEMA = Joi.object()
    .options({ abortEarly: false })
    .keys({
        id: Joi.string().required(),
        password: Joi.string().required()
    });
module.exports.SIGNUP_SCHEMA = Joi.object()
    .options({ abortEarly: false })
    .keys({
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string()
            .email()
            .required()
    });