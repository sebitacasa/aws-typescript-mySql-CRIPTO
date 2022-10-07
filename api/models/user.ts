"use strict";
import { DataType, Model, STRING, UUID, UUIDV4 } from "sequelize";

interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;

}

export interface  UserOuput extends Required<UserAttributes> {}
module.exports = (
  sequelize: any,
  DataTypes: {
    UUID: DataType;
    STRING: any;
  }
) => {
  class User extends Model<UserAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: string;
    firstName!: string;
    lastName!: string;
    userName!: string;
    email!: string;
    password!: string;
    // static associate(models: any) {
    //   User.belongsToMany(models.Cripto, {
    //     through: "ProjectAssignments",
    //   });
    // }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      userName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
