import Sequelize, { Model } from "sequelize";

class Player extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shirt_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
    }, {sequelize});
  }
}

export default Player
