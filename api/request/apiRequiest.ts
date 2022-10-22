import axios from "axios";
import { CriptoOuput } from "../models/cripto";
import db from "../models";
import { AnimeOutPut } from "../models/anime";
import { GenreOutPut } from "../models/genres";
import { GameOfThroresOutPut } from "../models/gameOfThrones";
const { Cripto, Anime, Genre, GameOfThrores } = db;
require("dotenv").config();
const { API_VIDEOGAMES } = process.env;

const apiCall = async () => {
  for (let i = 1; i < 2; i++) {
    const games = await axios.get(
      `https://api.rawg.io/api/games?key=${API_VIDEOGAMES}&page=${i}`
    );
    
    const newValues = games.data.results?.map((el: CriptoOuput) => {
      return {
        id: el.id,
        background_image: el.background_image,
        name: el.name,
        rating: el.rating,
      };
    });

    await Cripto.bulkCreate(newValues);
  }

  const options = {
    method: "GET",
    url: "https://anime-db.p.rapidapi.com/anime",
    params: {
      page: "1", 
      size: "5",
    },
    headers: {
      "X-RapidAPI-Key": "3eb5bb7b43msh674de93a5bc12d1p19a3afjsn056b747344d2",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };

  const anime = await axios.request(options);
 
  const aniClean: AnimeOutPut = anime.data.data.map((a: any) => a);

  await Anime.bulkCreate(aniClean);

  const optionsGenres = {
    method: 'GET',
    url: 'https://anime-db.p.rapidapi.com/genre',
    headers: {
      'X-RapidAPI-Key': '3eb5bb7b43msh674de93a5bc12d1p19a3afjsn056b747344d2',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };
  
 const genres = await axios.request(optionsGenres)
 const genreClean: GenreOutPut = genres.data.map((a: any) => a);
 await Genre.bulkCreate(genreClean)

 

 const got = {
   method: 'GET',
   url: 'https://game-of-thrones1.p.rapidapi.com/Characters',
   headers: {
     'X-RapidAPI-Key': '3eb5bb7b43msh674de93a5bc12d1p19a3afjsn056b747344d2',
     'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
   }
 };
 
 const gotDb = await axios.request(got)
 console.log(gotDb.data)
const gotDbClean: GameOfThroresOutPut = gotDb.data.map((a: any) => a);
await GameOfThrores.bulkCreate(gotDbClean)

};




// async function addDb (payload: ) {}



export {apiCall};
