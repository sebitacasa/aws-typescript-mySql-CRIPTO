
import { Box, Grid, GridItem, SimpleGrid, Container, VStack } from "@chakra-ui/react";
import React from "react";
import { actionCreators } from "../../state";

import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";

import { RootState } from "../../state/reducers";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { useSelector } from "react-redux";
import GameCard from "./CardGame";
import Nav from "../LandingPage/NavBar";

function HomeGame() {
    const state = useAppSelector((state: RootState) => state.videoGames);
  const dispatch = useAppDispatch();
  console.log(state.getCripto, "games");

  const { depositMoney } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    depositMoney();
  }, []);

  return (
    <VStack>

   
 
    <Grid
      templateAreas={`"header header"
      "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      >
      <GridItem pl="2"  area={"header"}>

      </GridItem>
      
      <GridItem pl="2"  area={"main"}>
     
      <SimpleGrid columns={3} spacing={10}>
      {state.getCripto?.map((game: any) => (
          <GameCard name={game.name} background_image={game.background_image} />
          ))}
    </SimpleGrid>
    

      
      </GridItem>
     
    </Grid>
        
          </VStack>
  );
}

export default HomeGame;
