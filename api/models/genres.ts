"use strict";
import { DataType, Model } from "sequelize";

interface GenreAttributes {
  _id: string;
}
export interface GenreOutPut extends Required<GenreAttributes> {
  data: any;
}

module.exports = (
  sequelize: any,
  DataTypes: {
    STRING: any;
  }
) => {
  class Genre extends Model<GenreAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    _id?: string;

    // static associate(models: any) {
    //   Cripto.belongsToMany(models.User, {
    //     through: "ProjectAssignments",
    //   });
    // }
  }
  Genre.init(
    {
      _id: {
        type: DataTypes.STRING,

        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Genre",
    }
  );
  return Genre;
};
