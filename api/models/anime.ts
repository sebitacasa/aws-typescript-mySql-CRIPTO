"use strict";
import { DataType, Model } from "sequelize";

interface AnimeAttributes {
  _id: string;
  title: string;
  //alternativeTitles:string;
  image: string;
  link:string;
  episodes: number;
  hasEpisode: boolean;
  synopsis: string;
  type: string
  hasRanking: boolean
  ranking: number;
  
  
}
export interface AnimeOutPut extends Required<AnimeAttributes> {
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
  class Anime extends Model<AnimeAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     _id?: string;
     title?: string;
     //alternativeTitles?:string;
     image?: string;
     link?:string;
     episodes?: number;
     hasEpisode?: boolean;
     synopsis?: string;
     type?: string
     hasRanking?: boolean
     ranking?: number;
    // static associate(models: any) {
    //   Cripto.belongsToMany(models.User, {
    //     through: "ProjectAssignments",
    //   });
    // }
  }
  Anime.init(
    {
      _id: {
        type: DataTypes.STRING,
        
        primaryKey: true,
      },
      title: { type: DataTypes.STRING,  },
      //alternativeTitles: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING,  },
      link: { type: DataTypes.STRING, },
      episodes: { type: DataTypes.STRING, },
      hasEpisode: { type: DataTypes.BOOLEAN,  },
      synopsis: { type: DataTypes.STRING},
      type: { type: DataTypes.STRING },
      hasRanking: { type: DataTypes.BOOLEAN},
      ranking: { type: DataTypes.STRING },
      

    },
    {
      sequelize,
      modelName: "Anime",
    }
  );
  return Anime;

  
};
