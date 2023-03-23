import { Router } from "express";

import { userCreate, userDelete, userIndex, userShow, userUpdate } from "./userController.js";

export const userRoute = Router();

userRoute.get('/', userIndex);
userRoute.post('/', userCreate);
userRoute.delete('/:id', userDelete);
userRoute.get('/:id', userShow);
userRoute.patch('/:id', userUpdate);
