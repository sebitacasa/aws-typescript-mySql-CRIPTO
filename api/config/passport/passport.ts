import { Request } from "express";
import db from "../../models";
const {User} = db

const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

export default function initialize ( passport: any ) {
    const authenticateUser = async (req: any, email: any, password: any, done: any) => {
        const user = await User.findOne({where: {email: email}})
        if(user == null){
            return done(null, false, {message: "No user with that email"})
        }  try {
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, {message: "Password incorrect"})
            }
        } catch (error) {
            return done(error)
        }

    }

    passport.use(new LocalStrategy({usernameField: "email", passReqToCallback:true},
    authenticateUser))
    passport.serializeUser((user: any, done: any) => {done(null, user.id)})

    passport.deserializeUser(async function (id: any, done: any) {
       const user = await User.findByPk(id)
       
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
};
    //passport.deserializeUser((user: any, done: any) => {done(null, user.id)})
