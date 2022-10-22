"use strict";
import { DataType, Model } from "sequelize";

interface GameOfThroresAttributes {
  id: number;
  firstName: string;
  lastName: string,
  fullName: string,
  title:string,
  image: string;
  family:string;

  
  
}
export interface GameOfThroresOutPut extends Required<GameOfThroresAttributes> {
  data: any;
}

module.exports = (
  sequelize: any,
  DataTypes: {
    INTEGER: DataType;
    STRING: any;
    BOOLEAN: any;
    NUMBER: any
  }
) => {
  class GameOfThrores extends Model<GameOfThroresAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id?: number;
     firstName?: string;
     lastName?: string;
     fullName?: string;
     title?:string;
     image?: string;
     family?:string;
   
    // static associate(models: any) {
    //   Cripto.belongsToMany(models.User, {
    //     through: "ProjectAssignments",
    //   });
    // }
  }
  GameOfThrores.init(
    {
      id: {
        type: DataTypes.INTEGER, 
        primaryKey: true
      
        
     
      },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING},
      fullName: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING  },
      title: { type: DataTypes.STRING },
      family: {type: DataTypes.STRING}
     
      

    },
    {
      sequelize,
      modelName: "GameOfThrores",
    }
  );
  return GameOfThrores;

  
};
