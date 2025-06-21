import eventoService from "../service/evento.service.js";

async function createEventoController(req, res) {
  try {
    const evento = await eventoService.createEventoService(req.body);
    return res.status(201).send(evento);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function updateEventoController(req, res) {
  const id = req.params.id;
  try {
    const evento = await eventoService.updateEventoService(id, req.body);
    return res.status(200).send(evento);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function updateEventoAprovarController(req, res) {
  const id = req.params.id;
  const status = req.params.status;
  try {
    const evento = await eventoService.updateEventoAprovarService(id, status, req.body);
    return res.status(200).send(evento);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function deleteEventoController(req, res) {
  const id = req.params.id;
  try {
    await eventoService.deleteEventoService(id);
    return res.status(200).send({ message: "Evento deletado com sucesso" });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function getAllEventoController(req, res) {
  try {
    const eventos = await eventoService.getAllEventoService();
    return res.status(200).send(eventos);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function getEventoByIdController(req, res) {
  try {
    const evento = await eventoService.getEventoById(req.params.id);
    return res.status(200).send(evento);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}
async function getEventoByStatusController(req, res) {
  try {
    const evento = await eventoService.getEventoByStatusService(
      req.params.status
    );
    return res.status(200).send(evento);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default {
  createEventoController,
  getAllEventoController,
  getEventoByIdController,
  updateEventoController,
  updateEventoAprovarController,
  deleteEventoController,
  getEventoByStatusController,
};
