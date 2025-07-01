import { Router } from "express";
import userController from "../controller/usuario.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/create", userController.createUserController);
userRouter.use(authMiddleware);
userRouter.get("/:id", userController.getUserByIdController);
userRouter.get("/", userController.getAllUserController);
userRouter.patch("/update/:id", userController.updateUserController);
userRouter.delete("/delete/:id", userController.deleteUserController);

export default userRouter;
