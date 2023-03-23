import { Router } from "express";
import { Login } from "./loginController.js";

export const loginRouter = Router();

loginRouter.post('/', Login);

