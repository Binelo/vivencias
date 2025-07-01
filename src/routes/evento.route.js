import { Router } from "express";
import eventoController from "../controller/evento.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const eventoRouter = Router();

eventoRouter.get("/:status", eventoController.getEventoByStatusController);
eventoRouter.get("/:id", eventoController.getEventoByIdController);
eventoRouter.get("/", eventoController.getAllEventoController);
eventoRouter.use(authMiddleware);
eventoRouter.post("/create", eventoController.createEventoController);
eventoRouter.patch("/update/:id", eventoController.updateEventoController);
// eventoRouter.patch("/:id/:status", eventoController.updateEventoAprovarController);
eventoRouter.delete("/delete/:id", eventoController.deleteEventoController);

export default eventoRouter;
