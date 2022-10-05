import axios from "axios";
import { CriptoOuput } from "../models/cripto";
import db from "../models";
const { Cripto } = db;
require('dotenv').config()

const apiCall = async () => {
  const options = {
    method: "GET",
    url: "https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/",
    params: { start: "0", limit: "100" },
    headers: {
      "X-RapidAPI-Key": "3eb5bb7b43msh674de93a5bc12d1p19a3afjsn056b747344d2",
      "X-RapidAPI-Host": "coinlore-cryptocurrency.p.rapidapi.com",
    },
  };

  const value = await axios.request(options);
  const newValues = value.data.data?.map(
    (el: {
      id: string;
      name: string;
      rank: number;
      price_usd: string;
      percent_change_24h: string;
      price_btc: string;
      market_cap_usd: string;
    }) => {
      return {
        id: el.id,
        name: el.name,
        rank: el.rank,
        price_usd: el.price_usd,
        percent_change_24h: el.percent_change_24h,
        price_btc: el.price_btc,
        market_cap_usd: el.market_cap_usd,
      };
    }
  );
 
  //return newValues

  const create = async (payload: CriptoOuput): Promise<CriptoOuput> => {
    // let data = {cripto: payload}
    if(!payload) throw Error;
    else{
      
      const ingredient = await Cripto.bulkCreate(payload);
    
      return ingredient;
    }

  };
  create(newValues);
};

export default apiCall;
