import express, { Request, Response } from "express";
import auth from '../firebase/auth';
import validator from "../utilities/validator";
import authSchema from "../schemas-joi/auth.schemajoi";

export const authRouter = express.Router();

authRouter.use(express.json());

authRouter.post('/createUser', validator.body(authSchema), async (_req: Request, res: Response) => {
    try {
        const { email, password } = _req.body;
        const result = await auth.createUser(email, password);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

authRouter.post('/logIn', validator.body(authSchema), async (_req: Request, res: Response) => {
    try {
        const { email, password } = _req.body;
        const result = await auth.logIn(email, password);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
})