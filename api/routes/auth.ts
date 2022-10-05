import * as  constrollers  from "../controllers/authController";
import express from "express"
const router = express.Router()
import {signup} from "../controllers/authController"


const passportRoute =  (app: any, passport: any) => {

    app.get('/signup', signup);
    app.get('/signin', signup);
    app.post('/signup', passport.authenticate('local-signup'));
}


export default  passportRoute