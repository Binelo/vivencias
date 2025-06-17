import segmentoService from "../service/segmento.service.js";

async function createSegmentoController(req, res) {
  try {
    const segmento = await segmentoService.createSegmentoService(req.body);
    return res.status(201).send(segmento);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function updateSegmentoController(req, res) {
  const id = req.params.id;
  try {
    const segmento = await segmentoService.updateSegmentoService(id, req.body);
    return res.status(200).send(segmento);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function deleteSegmentoController(req, res) {
  const id = req.params.id;
  try {
    await segmentoService.deleteSegmentoService(id);
    return res.status(200).send({ message: "Segmento deletado com sucesso" });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function getAllSegmentoController(req, res) {
  try {
    const segmentos = await segmentoService.getAllSegmentoService();
    return res.status(200).send(segmentos);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function getSegmentoByIdController(req, res) {
  try {
    const segmento = await segmentoService.getSegmentoById(req.params.id);
    return res.status(200).send(segmento);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default {
  createSegmentoController,
  getAllSegmentoController,
  getSegmentoByIdController,
  updateSegmentoController,
  deleteSegmentoController,
};
