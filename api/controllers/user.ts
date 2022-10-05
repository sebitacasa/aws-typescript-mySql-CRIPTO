import db from "../models/index";
const { Cripto, User } = db;
import axios from "axios";
import Sequelize from "sequelize";
import bcrypt from "bcrypt";
import passport  from "passport"
const localStrategy = require('passport-local').Strategy;


const addUsers = async (req: any, res: any) => {
  

  console.log(req.body)
  
  
    

   
   
   
};

const login =async (req: any, res: any) => {
  

}

export {  addUsers };
