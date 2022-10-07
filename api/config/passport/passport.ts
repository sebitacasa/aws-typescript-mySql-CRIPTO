import db from "../../models";
const {User} = db
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../configJwt"

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await User.findByPk(payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});