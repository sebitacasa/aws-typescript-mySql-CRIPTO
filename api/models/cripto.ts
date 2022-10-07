"use strict";
import { DataType, Model } from "sequelize";

interface CriptoAttributes {
  id: string;
  name: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  price_btc: string;
  market_cap_usd: string;
}
export interface CriptoOuput extends Required<CriptoAttributes> {}

module.exports = (
  sequelize: any,
  DataTypes: {
    INTEGER: DataType;
    STRING: any;
    BOOLEAN: any;
  }
) => {
  class Cripto extends Model<CriptoAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    name!: string;
    rank!: number;
    price_usd!: string;
    percent_change_24h?: string;
    price_btc!: string;
    market_cap_usd!: string;
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
      rank: { type: DataTypes.INTEGER, allowNull: false },
      price_usd: { type: DataTypes.STRING, allowNull: false },
      percent_change_24h: { type: DataTypes.STRING},
      price_btc: { type: DataTypes.STRING, allowNull: false },
      market_cap_usd: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Cripto",
    }
  );
  return Cripto;

  
};

