import { Router } from "express";
import localidadeController from "../controller/localidade.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const localidadeRouter = Router();

localidadeRouter.get("/:id", localidadeController.getLocalidadeByIdController);
localidadeRouter.get("/", localidadeController.getAllLocalidadeController);
localidadeRouter.use(authMiddleware);
localidadeRouter.post("/create", localidadeController.createLocalidadeController);
localidadeRouter.patch("/update/:id", localidadeController.updateLocalidadeController);
localidadeRouter.delete("/delete/:id", localidadeController.deleteLocalidadeController);

export default localidadeRouter;
