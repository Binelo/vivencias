import { Router } from "express";
import eventoController from "../controller/evento.controller.js";

const eventoRouter = Router();

eventoRouter.post("/create", eventoController.createEventoController);
eventoRouter.patch("/update/:id", eventoController.updateEventoController);
eventoRouter.delete("/delete/:id", eventoController.deleteEventoController);
eventoRouter.get("/:status", eventoController.getEventoByStatusController);
eventoRouter.get("/:id", eventoController.getEventoByIdController);
eventoRouter.get("/", eventoController.getAllEventoController);

export default eventoRouter;
