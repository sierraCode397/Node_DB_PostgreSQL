'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { CategorieSchema, CATEGORIE_TABLE } = require('./../models/categories.model');
const { OrderSchema, ORDER_TABLE } = require('./../models/order.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(CATEGORIE_TABLE, CategorieSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORIE_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
  }
};

