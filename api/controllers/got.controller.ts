import { Response } from "express"
import { Request } from "express-validator/src/base"
import DB from "../models"

const getGot = async (req: Request, res: Response) => {
    try {
        const got = await DB.GameOfThrores.findAll()
        if(!got){
            res.status(404).send("ups, something happend... try again")
        } else {
            res.status(200).send(got)
        }
        
    } catch (error) {
        console.log(error)
    }


}

export {getGot}