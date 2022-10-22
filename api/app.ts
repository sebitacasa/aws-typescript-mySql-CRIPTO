import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import post from "./routes/index";
import passport from "passport";
import session from "express-session"
import flashs from "express-flash"
const app = express();
const passportLocal = require("passport-local").Strategy;
//import router from "./routes/auth"
//import passportMiddleware from './config/passport/passport'
import {passportRoute} from "./routes/auth"
import initialize from "./config/passport/passport"
import passRouter from "./routes/index"


//require('dotenv').config({ path: __dirname+'/.env' });

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


//app.use("/auth", router);
//require("./config/passport/passport")(passport)




// Swagger config
app.use(flashs())
app.use(session({
  secret: 'keyboard cat',
  resave: true, 
  saveUninitialized:true
  })); // session secret
app.use(passport.initialize());
app.use(passport.session()); 
//passport.use(passportMiddleware);
passportRoute(app, passport)
initialize(passport)
passRouter(app, passport)
// require("./config/passport/passport")(passport)
// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: (arg0: any) => void) {
  next(createError(404));
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
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



