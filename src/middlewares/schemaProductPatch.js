import Joi from "joi";

export const schemaPatch = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.number().integer(),
    qty: Joi.number().integer(),
    category: Joi.string(),
    id: Joi.forbidden(),
  });