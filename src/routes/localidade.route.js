import { Router } from "express";
import localidadeController from "../controller/localidade.controller.js";

const localidadeRouter = Router();

localidadeRouter.post(
  "/create",
  localidadeController.createLocalidadeController
);
localidadeRouter.patch(
  "/update/:id",
  localidadeController.updateLocalidadeController
);
localidadeRouter.delete(
  "/delete/:id",
  localidadeController.deleteLocalidadeController
);
localidadeRouter.get("/:id", localidadeController.getLocalidadeByIdController);
localidadeRouter.get("/", localidadeController.getAllLocalidadeController);

export default localidadeRouter;
