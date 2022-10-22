import db from "../models/index";
const { Cripto, User } = db;
import { UserOuput } from "../models/user";

import { Request, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import configJwt from "../config/configJwt";
import passport from "passport";

const signup = async (req: Request, res: any): Promise<UserOuput> => {
  if (!req.body.email && !req.body.password) {
    return res.status(404).send("must pass and email/password");
  } else {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      return res.status(404).send("already exist an user whith this email");
    } else {
      let encrypetedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: encrypetedPassword,
      });
      return res.status(200).send(newUser);
    }
  }
};

const login = async (req: Request, res:Response, next: any) => {
  passport.authenticate("local", (err: any, user: any, info: any) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err: any) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
}




export { signup, login };
