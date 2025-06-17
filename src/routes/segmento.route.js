import { Router } from "express";
import segmentoController from "../controller/segmento.controller.js";

const segmentoRouter = Router();

segmentoRouter.post("/create", segmentoController.createSegmentoController);
segmentoRouter.patch(
  "/update/:id",
  segmentoController.updateSegmentoController
);
segmentoRouter.delete(
  "/delete/:id",
  segmentoController.deleteSegmentoController
);
segmentoRouter.get("/:id", segmentoController.getSegmentoByIdController);
segmentoRouter.get("/", segmentoController.getAllSegmentoController);

export default segmentoRouter;
