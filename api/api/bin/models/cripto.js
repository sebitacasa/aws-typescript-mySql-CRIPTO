"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cripto extends sequelize_1.Model {
        static associate(models) {
            Cripto.belongsToMany(models.User, {
                through: "ProjectAssignments",
            });
        }
    }
    Cripto.init({
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        rank: { type: DataTypes.INTEGER, allowNull: false },
        price_usd: { type: DataTypes.STRING, allowNull: false },
        percent_change_24h: { type: DataTypes.STRING },
        price_btc: { type: DataTypes.STRING, allowNull: false },
        market_cap_usd: { type: DataTypes.STRING, allowNull: false },
    }, {
        sequelize,
        modelName: "Cripto",
    });
    return Cripto;
};
