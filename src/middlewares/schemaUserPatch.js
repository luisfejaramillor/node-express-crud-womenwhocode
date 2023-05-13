import Joi from "joi";
import JoiDate from "@joi/date";

const extendedJoi = Joi.extend(JoiDate);
// Defining schema for POST requests
export const schemaUserPatch = extendedJoi.object({
  firstName: extendedJoi
    .string()
    .messages({ "string.empty": "There must be a value" }),
  lastName: extendedJoi
    .string()
    .messages({ "string.empty": "There must be a value" }),
  birthday: extendedJoi.date().format("YYYY-MM-DD").utc(),
  email: extendedJoi.string().email(),
  password: extendedJoi.string().min(8),
  phone: extendedJoi.number().integer(),
  streetAddress: extendedJoi.string(),
  city: extendedJoi.string(),
  state: extendedJoi.string(),
  zipCode: extendedJoi.number().integer(),
  id: extendedJoi.forbidden(),
});
