import express from "express"
import { animeGet, getAllAnimes } from "../controllers/anime"
import {getCriptos } from "../controllers/criptos"
import { getGot } from "../controllers/got.controller"
import { addUsers }  from "../controllers/user"

import { checkAuthentication } from "./auth"
//passport.authenticate("jwt", {session: false}),
export default function passRouter (app: any, passport: any){
  //app.get("/:id",  passport.authenticate('local'), getCriptosById)

  app.get("/criptos", getCriptos) 
  app.get("/allAnimes", getAllAnimes)
  app.get("/anime", animeGet)
  app.get("/got", getGot)
  app.post("/add", addUsers)
  
  // app.post(
  //     '/signup',
  //     passport.authenticate('signup', { session: false }),
  //     async (req: any, res: any, next: any) => {
  //       res.json({
  //         message: 'Signup successful',
  //         user: req.user
  //       });
  //     }
  //   );
  
}


