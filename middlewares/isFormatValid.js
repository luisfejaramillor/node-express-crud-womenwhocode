// Importing Joi library
import Joi from "joi";

// Defining schema for params
export const paramsSchema = Joi.object({
  id: Joi.number().integer().required(),
});

// Creating function for validating the format of request body
export const isFormatValid = (req, res, next) => {
  // Defining schema for POST method
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().integer().required(),
    qty: Joi.number().integer().required(),
    category: Joi.string().required(),
    id: Joi.forbidden(),
  });

  // Defining schema for PATCH method
  const schemaPatch = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.number().integer(),
    qty: Joi.number().integer(),
    category: Joi.string(),
    id: Joi.forbidden(),
  });

  // Valid methods for this route
  const validMethods = ["POST"];

  // If request method is included in validMethods
  if (validMethods.includes(req.method)) {
    // Check whether the request body matches the schema or not
    if (schema.validate(req.body).error) {
      res.status(404).json("Input format data is not valid");
      return;
    }
    // Call next middleware function
    next();
  }
  // If request method is PATCH
  if(req.method === 'PATCH'){
    // Check whether the request body matches the patch schema or not
    if (schemaPatch.validate(req.body).error) {
      res.status(404).json("Input format data is not valid for patch method");
      return;
    }
  }
  // Call next middleware function
  next();
};
