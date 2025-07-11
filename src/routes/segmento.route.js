import { Router } from "express";
import segmentoController from "../controller/segmento.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const segmentoRouter = Router();

segmentoRouter.get("/:id", segmentoController.getSegmentoByIdController);
segmentoRouter.get("/", segmentoController.getAllSegmentoController);
segmentoRouter.use(authMiddleware);
segmentoRouter.post("/create", segmentoController.createSegmentoController);
segmentoRouter.patch("/update/:id", segmentoController.updateSegmentoController);
segmentoRouter.delete("/delete/:id", segmentoController.deleteSegmentoController);

export default segmentoRouter;
