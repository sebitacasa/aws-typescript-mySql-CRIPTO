import * as  constrollers  from "../controllers/authController";
import express from "express"
const router = express.Router()
import {signup, login} from "../controllers/authController"


const passportRoute =  (app: any) => {

    //app.get('/signup', signup);
    app.post('/sigup', signup);
    app.post("/login", login)
    // app.post('/signup', passport.authenticate('local-signup'));
    
}


export default  passportRoute