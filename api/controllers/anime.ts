import axios from "axios";
import { Request, Response } from "express";
import DB from "../models"

const animeGet = async (req: Request, res: Response) => {
  try {
    const { title, page, size } = req.query;
    const options = {
      method: "GET",
      url: `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${title}`,
      // params: {
      //   page: '1', // como saber si debo llamar
      //   size: '5',
      //  // search: req.query,
      // //   genres: req.query,
      // //   sortBy: req.query,
      // //   sortOrder: req.query
      // },
      headers: {
        "X-RapidAPI-Key": "3eb5bb7b43msh674de93a5bc12d1p19a3afjsn056b747344d2",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    const anime = await axios.request(options);
    res.status(200).send(anime.data);
  } catch (error) {
    res.status(404).send(error);
  }
};

const getAllAnimes = async(req: Request, res: Response) => {
  try {
    const  animes = await DB.Anime.findAll()
  res.status(200).send(animes)
  } catch (error) {
    res.status(404).send(error)
  }
}

export { animeGet, getAllAnimes };
