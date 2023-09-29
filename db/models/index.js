const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');
const { Order, OrderSchema } = require('./order.model');
const { Categorie, CategorieSchema } = require('./categories.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Categorie.init(CategorieSchema, Categorie.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Categorie.associate(sequelize.models);
  Product.associate(sequelize.models);
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = setupModels;
