require('dotenv').config()

export default {


    secret: process.env.AUTH_SECRET || "sebita",
    expires: process.env.AUTH_EXPIRES || "2h",
    rounds: process.env.AUTH_ROUNDS || 10,
}