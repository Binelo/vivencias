import authController from "../controller/auth.controller.js";

import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", authController.loginController);

export default authRouter;
