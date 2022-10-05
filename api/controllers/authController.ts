import db from "../models/index";
const { Cripto, User } = db;
import passport  from "passport"
const localStrategy = require('passport-local').Strategy;


const signup = (req: any, res: { send: (arg0: string) => void; }) => {
  res.send("sigup")
}

export {signup}