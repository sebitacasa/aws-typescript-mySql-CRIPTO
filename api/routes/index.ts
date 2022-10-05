import express from "express"
import {getCriptos, getCriptosById } from "../controllers/criptos"
import { addUsers }  from "../controllers/user"
const router = express.Router() 
import passport from 'passport';

router.get("/:id", getCriptosById)
router.get("/", getCriptos)
router.post("/", addUsers)

router.post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    async (req: any, res: any, next) => {
      res.json({
        message: 'Signup successful',
        user: req.user
      });
    }
  );

export default router