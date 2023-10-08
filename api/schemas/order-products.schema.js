const Joi = require('joi');

const id = Joi.number().integer() ;
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const getAddItemSchema = Joi.object({
  id: id.required(),
});

const updateAddItemSchema = Joi.object({
  amount: amount.required()
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  amount: amount.required(),
  productId: productId.required()
});



module.exports = { updateAddItemSchema, getAddItemSchema, addItemSchema }
