import { useEffect, useState } from "react";
// este contiene las imagenes

import animeGet from "../../httpClient";
//import {useQuery} from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import BlogPostWithImage from "./Card";
import {
  Container,
  Heading,
  Divider,
  Wrap,
  WrapItem,
  VStack,
  Box,
  Flex,
  Grid,
} from "@chakra-ui/react";
import SmallWithSocial from "../LandingPage/Footer";
// import { Spinner}  from "./Spinner"
// import { Empty } from "./Empty";

export function AnimeGrid({ search }: { search: any }) {


    
  const [anime, setAnimes] = useState([]);
  console.log(anime, "aaaaa");
  const [isLoading, setIsLoading] = useState(true);
  //const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // const searchUrl = search
    //   ? "/search/movie?query=" + search + "&page=" + page
    //   : "/discover/movie?page=" + page;
    animeGet(search).then((data: any) => {
      setAnimes((prevMovies) => prevMovies.concat(data.data));
      //setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, []);

  //   if (!isLoading && anime.length === 0) {
  //     return "<Empty />";
  //   }

  return (
<Grid templateColumns='repeat(5, 1fr)' gap={6}>
{anime.map((a: any) => {
          return (
            <BlogPostWithImage
              _id={a._id}
              title={a.title}
              image={a.image}
              synopsis={a.synopsis}
            />
          );
        })}
</Grid>



    
  );
}
