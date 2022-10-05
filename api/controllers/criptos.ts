import db from "../models/index";
const { Cripto} = db;
import axios from "axios";
import Sequelize from "sequelize";

const getCriptos = async (req: any, res: any) => {
    const {  name } = req.query;
    
    try {
      const criptoFilter = await Cripto.findAll({
          
        order: [["rank", "ASC"]],
      });
      res.status(200).send(criptoFilter);
    } catch (error) {
      console.log(error);
    }
  };
  

  const getCriptosById = async (req: any, res: any) => {
    const { id } = req.params;
    try {
      const options = {
        method: "GET",
        url: "https://coinlore-cryptocurrency.p.rapidapi.com/api/ticker/",
        params: { id: id },
        headers: {
          "X-RapidAPI-Key": "3eb5bb7b43msh674de93a5bc12d1p19a3afjsn056b747344d2",
          "X-RapidAPI-Host": "coinlore-cryptocurrency.p.rapidapi.com",
        },
      };
  
      const newValues = await axios.request(options);
      if (newValues.data.length === 0) {
        return res.status(404).send("ups something happend");
      } else {
        return res.status(200).send(newValues.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  export { getCriptos, getCriptosById };