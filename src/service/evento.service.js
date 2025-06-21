import eventoRepositories from "../repositories/evento.repositories.js";

async function createEventoService(data) {
  const evento = await eventoRepositories.createEventoRepository(data);
  return evento;
}

async function updateEventoService(id, data) {
  const evento = await eventoRepositories.getEventoByIdRepository(id);
  if (!evento) throw new Error("Evento não encontrado");
  const eventoAt = await eventoRepositories.updateEventoRepository(id, data);
  return eventoAt;
}

async function updateEventoAprovarService(id, status, data) {
  const evento = await eventoRepositories.getEventoByIdRepository(id);
  if (!evento) throw new Error("Evento não encontrado");
  data.status_aprovacao = status;
  const eventoAt = await eventoRepositories.updateEventoAprovarRepository(id, data);
  return eventoAt;
}

async function deleteEventoService(id) {
  const evento = await eventoRepositories.getEventoByIdRepository(id);
  if (!evento) throw new Error("Evento não encontrado");
  await eventoRepositories.deleteEventoRepository(id);
  return { message: "Evento deletado com sucesso" };
}

async function getAllEventoService() {
  const eventos = await eventoRepositories.getAllEventoRepository();
  if (eventos.length == 0) throw new Error("Nenhum evento Encontrado");

  return eventos;
}

async function getEventoById(id) {
  const evento = await eventoRepositories.getEventoByIdRepository(id);
  if (!evento) throw new Error("Evento não encontrado");

  return evento;
}

async function getEventoByStatusService(status) {
  const eventos = await eventoRepositories.getEventoByStatusRepository(status);
  if (eventos.length == 0) throw new Error("Nenhum evento encontrado");

  return eventos;
}

export default {
  createEventoService,
  getAllEventoService,
  getEventoById,
  updateEventoService,
  updateEventoAprovarService,
  deleteEventoService,
  getEventoByStatusService,
};
