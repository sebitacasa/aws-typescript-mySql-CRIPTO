import { CssBaseline, Container, Box } from "@mui/material";
import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { RootState } from '../state/reducers';
import OutlinedCard from "./card";
import styles from "./home.module.css"

export default function Home(){
    const state = useSelector((state: RootState) => state.cripto)
    const dispatch = useDispatch()
    console.log(state.getCripto, "crip" )

    const { depositMoney } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        
        depositMoney()
      }, [])

     
      return (
        <div className={styles.containerGeneral} >
           

<React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      
            <div className={styles.cards}>
        {
            state.getCripto?.map((product : any) => (
                
                    <OutlinedCard key={product.id} product={product}/>
                ))
            }

            </div>
       
      </Container>
    </React.Fragment>

        </div>
        
       
      )
}