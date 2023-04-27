import Joi from "joi";

// Defining schema for POST requests
export const schema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "string.empty": "There must be a value" }),
  description: Joi.string().required(),
  price: Joi.number().integer().required().messages({
    "number.base": "Price must be a number",
    "number.integer": "Price must be an integer",
  }),
  qty: Joi.number().integer().required(),
  category: Joi.string().required(),
  id: Joi.forbidden(),
});

export const schemaPatch = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number().integer(),
  qty: Joi.number().integer(),
  category: Joi.string(),
  id: Joi.forbidden(),
});
