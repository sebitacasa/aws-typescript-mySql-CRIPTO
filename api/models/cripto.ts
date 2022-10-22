"use strict";
import { DataType, Model } from "sequelize";

interface CriptoAttributes {
  id: number;
  name: string;
  // description: string;
  // released: string;
  rating: string;
  //platforms: string;
  background_image: string;
}
export interface CriptoOuput extends Required<CriptoAttributes> {}

module.exports = (
  sequelize: any,
  DataTypes: {
    INTEGER: DataType;
    STRING: any;
    BOOLEAN: any;
    NUMBER: any
  }
) => {
  class Cripto extends Model<CriptoAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!: string;
    // decription!: string;
    // released!: string;
    rating?: string;
    //platforms!: string;
    background_image!: string;
    // static associate(models: any) {
    //   Cripto.belongsToMany(models.User, {
    //     through: "ProjectAssignments",
    //   });
    // }
  }
  Cripto.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      //description: { type: DataTypes.STRING, allowNull: false },
      //released: { type: DataTypes.STRING, allowNull: false },
       rating: { type: DataTypes.STRING, allowNull: false},
      // platforms: { type: DataTypes.STRING, allowNull: false },
     background_image: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Cripto",
    }
  );
  return Cripto;

  
};

