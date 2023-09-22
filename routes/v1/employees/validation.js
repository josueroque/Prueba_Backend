const Joi = require("joi");

const employeeSchema = Joi.object({
  Email: Joi.string()
    .email()
    .required()
    .regex(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ),
  FirstName: Joi.string().min(2).required(),
  LastName: Joi.string().min(2).required(),
  Password: Joi.string().min(6).required(),
  Gender: Joi.string().optional(),
  PhoneNumber: Joi.string().min(8).required(),
  DocumentNumber: Joi.string().min(6).required(),
  PositionId: Joi.number().required(),
  Active: Joi.boolean().required(),
}).options({ abortEarly: false });

const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      console.log(error.message);

      res.status(400).json({ errors: error.details });
    } else {
      next();
    }
  };
};

module.exports = {
  employeeSchema,
  validationMiddleware,
};
