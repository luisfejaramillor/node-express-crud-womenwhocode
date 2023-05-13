import Joi from "joi";
import JoiDate from "@joi/date";

const extendedJoi = Joi.extend(JoiDate);
// Defining schema for POST requests
export const schemaUser = extendedJoi.object({
  firstName: extendedJoi
    .string()
    .required()
    .messages({ "string.empty": "There must be a value" }),
  lastName: extendedJoi
    .string()
    .required()
    .messages({ "string.empty": "There must be a value" }),
  birthday: extendedJoi.date().required().format("YYYY-MM-DD").utc(),
  email: extendedJoi.string().email().required(),
  password: extendedJoi.string().min(8).required(),
  phone: extendedJoi.number().integer().required(),
  streetAddress: extendedJoi.string().required(),
  city: extendedJoi.string().required(),
  state: extendedJoi.string().required(),
  zipCode: extendedJoi.number().integer().required(),
  id: extendedJoi.forbidden(),
});
