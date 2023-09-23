const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.string().uri();

const createOrderSchema = Joi.object({
  description: name.required(),
  image: description.required()
});

const updateOrderSchema = Joi.object({
  description: name,
  image: description
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema }
