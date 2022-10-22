import React from "react";
import { actionCreators } from "../../state";

import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";

import { RootState } from "../../state/reducers";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { useSelector } from "react-redux";

import {
  Container,
  Heading,
  Divider,
  Wrap,
  WrapItem,
  VStack,
  Box,
  Text,
  Grid,
} from "@chakra-ui/react";
import BlogPostWithImage from "./Card";
import { AnimeAttributes } from "./Card";
import Nav from "../LandingPage/NavBar";
import SmallWithSocial from "../LandingPage/Footer";
import { AnimeGrid } from "./Anime";
import { useQuery } from "../../hooks/useQuery";
import { useDebounce } from "../../hooks/useDebounce";
import Search from "./Search";
import HomeGame from "../mainPageGames/HomeGame";
import HomeGot from "../gotComponent/Gothome";

function HomeAnime() {
  const query = useQuery();
  const title = query.get("title");
  const debounceSearch = useDebounce(title, 400);
  ///////////////////////////////////////////////////
  const state = useAppSelector((state: RootState) => state.animeArray);
  const dispatch = useAppDispatch();
  console.log(
    state.animeArray.map((e: any) => e.title),
    "crip"
  );

  const { getAnime } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div>
      <Nav />
      <Container maxW={"16md"} maxH="auto" p="15">
        <Grid templateColumns="repeat(5, 1fr)" gap={3}>
          {state.animeArray?.map((cont: AnimeAttributes) => (
            <BlogPostWithImage
              title={cont.title}
              image={cont.image}
              synopsis={cont.synopsis}
              _id={cont._id}
            />
          ))}
        </Grid>

        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%"></Box>
          </WrapItem>
        </Wrap>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>
          <Box>
            <Search />
          </Box>
          <HomeGame />

         

          {/* <HomeGot/> */}
        
          {/* <AnimeGrid key={title}  search={debounceSearch}/> */}
        </VStack>
      </Container>
      {/* <SmallWithSocial/> */}
    </div>
  );
}

export default HomeAnime;
