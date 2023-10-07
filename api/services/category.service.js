const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class CategoryService {
  constructor(){
  }

 async create(data) {
    const newCategorie = await models.Categorie.create(data);
    return newCategorie;
  }

  async find() {
    const rta = await models.Categorie.findAll();
    return rta;
  }

  async findOne(id) {
    const categorie = await models.Categorie.findByPk(id, {
      include: ['products'] //La associate/asociacion product
    });
    if(!categorie){
      throw boom.notFound('Categorie not found');
    }
    return categorie;
  }

  async update(id, changes) {
    const categorie = await this.findOne(id);
    const rta = await categorie.update(changes);
    return rta;
  }

  async delete(id) {
    const categorie = await this.findOne(id);
    await categorie.destroy();
    return { id };
  }

}

module.exports = CategoryService;
