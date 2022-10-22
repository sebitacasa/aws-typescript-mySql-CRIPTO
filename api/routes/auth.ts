import * as constrollers from "../controllers/authController";
import express, { Request, Response } from "express";
import { signup, login } from "../controllers/authController";
const {logout} = require("../controllers/authController")

import db from "../models";
const { User } = db;
import bcrypt from "bcrypt";
const passportRoute = (app: any, passport: any) => {
  //app.get('/signup', signup);
  //app.post("/sigup", signup);
  //app.post("/login", login)
  app.post("/register", checkNotAuthentication, signup)
  // app.post(
  //   "/register",
  //   async (
  //     req: {
  //       body: {
  //         firstName: any;
  //         lastName: any;
  //         userName: any;
  //         email: any;
  //         password: string | Buffer;
  //       };
  //     },
  //     res: { send: (arg0: any) => void }
  //   ) => {
  //     const hashedPassword = await bcrypt.hash(req.body.password, 10);
  //     const user = await User.findOne({ where: { email: req.body.email } });
  //     if (user) {
  //       res.send("User already exists");
  //     } else {
  //       await User.create({
  //         firstName: req.body.firstName,
  //         lastName: req.body.lastName,
  //         userName: req.body.userName,
  //         email: req.body.email,
  //         password: hashedPassword,
  //       });

  //       res.send("User created");
  //     }
    
  //   }
  // );

  app.post("/login", login);
  
  app.post('/logout', function(req: { logout: (arg0: (err: any) => any) => void; }, res: { redirect: (arg0: string) => void; }, next: (arg0: any) => any) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
  });


  // app.post('/signup', passport.authenticate('local-signup'));



}

const checkAuthentication = (req: { isAuthenticated: () => any; }, res: any, next: () => any) => {
  if (req.isAuthenticated()) {
      console.log('login:yes')
    return next();
  }
  console.log('login:no');
  throw new Error("the user dont exist")
}

const checkNotAuthentication = (req: { isAuthenticated: () => any; }, res: any, next: () => any) => {
  if (req.isAuthenticated()) {
     return res.redirect("./criptos")
  }
   next();
 
}



export { passportRoute, checkAuthentication, checkNotAuthentication}
