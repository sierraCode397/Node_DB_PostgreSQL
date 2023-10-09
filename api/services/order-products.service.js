const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class OrderProductService {
  constructor(){
  }

  async create(data){
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async find() {
    const rta = await models.OrderProduct.findAll();
    return rta;
  }

  async findOne(id) {
    const orderProduct = await models.OrderProduct.findByPk(id, {
    });
    if(!orderProduct){
      throw boom.notFound('OrderProduct not found');
    }
    return orderProduct;
  }

  async update(id, changes) {
    const orderProduct = await this.findOne(id);
    const rta = await orderProduct.update(changes);
    return rta;
  }

  async delete(id) {
    const orderProduct = await this.findOne(id);
    await orderProduct.destroy();
    return { id };
  }

}

module.exports = OrderProductService;
