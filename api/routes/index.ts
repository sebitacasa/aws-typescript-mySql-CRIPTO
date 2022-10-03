import express from "express"
import {getCriptos, addUsers, getCriptosById } from "../controllers/user"
const router = express.Router() 


router.get("/:id", getCriptosById)
router.get("/", getCriptos)
router.post("/", addUsers)

export default router