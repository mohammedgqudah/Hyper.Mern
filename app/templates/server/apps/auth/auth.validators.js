import Joi from '@hapi/joi';

export const LOGIN_SCHEMA = Joi.object()
  .options({ abortEarly: false })
  .keys({
    id: Joi.string().required(),
    password: Joi.string().required()
  });
export const SIGNUP_SCHEMA = Joi.object()
  .options({ abortEarly: false })
  .keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string()
      .email()
      .required()
  });
