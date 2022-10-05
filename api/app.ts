import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import post from "./routes/index";
import passport from "passport";
import session from "express-session"
import bodyParser from "body-parser";
const app = express();
import router from "./routes/auth"
import {passportFunction} from "./config/passport/passport"
import passportRoute from "./routes/auth"

import db from "./models"
const {User} = db


//require('dotenv').config({ path: __dirname+'/.env' });

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", post);
//app.use("/auth", router);

 


// Swagger config

app.use(session({
  secret: 'keyboard cat',
  resave: true, 
  saveUninitialized:true
  })); // session secret
app.use(passport.initialize());
app.use(passport.session()); 

passportRoute(app, passport)
passportFunction(User, passport, )
// require("./config/passport/passport")(passport)
// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: (arg0: any) => void) {
  next(createError(404));
});

// error handler
app.use( (err: any, req: any, res: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res
    .status(err.status || 500)
    .json({ message: res.locals.message, statusCode: err.status });
});

module.exports = app;
function flash(): any {
  throw new Error("Function not implemented.");
}

