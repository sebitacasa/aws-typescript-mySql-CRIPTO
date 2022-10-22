import axios from "axios";
const animeGet = async (title: any) => {
  try {
    const options = {
      method: "GET",
      url: `https://anime-db.p.rapidapi.com/anime?page=1&size=4&search=${title}`,
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
    return anime.data;
  } catch (error) {
    console.error(error);
  }
};

export default animeGet;
