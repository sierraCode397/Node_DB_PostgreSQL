'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { CategorieSchema, CATEGORIE_TABLE } = require('./../models/categories.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORIE_TABLE, CategorieSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORIE_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
