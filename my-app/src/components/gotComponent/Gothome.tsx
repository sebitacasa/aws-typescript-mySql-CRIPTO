import { Box, Grid, GridItem, SimpleGrid, Container, VStack } from "@chakra-ui/react";
import React from "react";
import { actionCreators } from "../../state";

import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";

import { RootState } from "../../state/reducers";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { useSelector } from "react-redux";
import GotCard from "./CardGot";
import Nav from "../LandingPage/NavBar";

function HomeGot() {
  const state = useAppSelector((state: RootState) => state.gotReducers);
  const dispatch = useAppDispatch();
  console.log(state.got, "got");

  const { getGot } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getGot();
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
      {state.got?.map((game: any) => (
          <GotCard fullName={game.fullName} image={game.image} title={game.title} family={game.family}/>
          ))}
    </SimpleGrid>
    

      
      </GridItem>
      
    </Grid>
        
          </VStack>
  );
}

export default HomeGot;