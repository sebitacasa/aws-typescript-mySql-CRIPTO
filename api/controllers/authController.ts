import db from "../models/index";
const { Cripto, User } = db;
import { UserOuput } from "../models/user";

import { Request, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import configJwt from "../config/configJwt";

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

const login = async (req: Request, res: any) => {
  try {
    if (!req.body.email && !req.body.password) {
      return res.status(400).send("email and password are necessary");
    } else {
      const user = await User.findOne({
        where: { email: req.body.email },
      });
      if (Object.entries(user).length === 0) {
        return res
          .status(400)
          .send("email or password are incorrect, try again");
      } else if (
        user &&
        (await bcrypt.compare(req.body.password, user.password))
      ) {
        let token = jwt.sign(
          { id: user.id, email: user.email },
          configJwt.secret,
          {
            expiresIn: configJwt.expires,
          }
        );

        res.status(200).send({token: token});
      }
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

export { signup, login };
