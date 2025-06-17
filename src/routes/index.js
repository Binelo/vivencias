import { Router } from "express";
import userRouter from "./usuario.route.js";
import localidadeRouter from "./localidade.route.js";
import segmentoRouter from "./segmento.route.js";
import eventoRouter from "./evento.route.js";

const router = Router();

router.use("/user", userRouter);
router.use("/localidade", localidadeRouter);
router.use("/segmento", segmentoRouter);
router.use("/evento", eventoRouter);

export default router;
