import mongoose from "mongoose";
import eventoRepositories from "../repositories/evento.repositories.js";

async function createEventoService(data) {
  data.imagem_banner_1 = Buffer.from("Imagem fake para teste");
  data.id_usuario = new mongoose.Types.ObjectId("6851f0e11c72adf2b79c7900");
  data.id_segmento = new mongoose.Types.ObjectId("6851f7fd6eea5b5521d7033e");
  data.id_localidade = new mongoose.Types.ObjectId("6851f5028d869a859fa6b922");
  const evento = await eventoRepositories.createEventoRepository(data);
  return evento;
}

async function updateEventoService(id, data) {
  const evento = await eventoRepositories.getEventoByIdRepository(id);
  if (!evento) throw new Error("Evento não encontrado");
  const eventoAt = await eventoRepositories.updateEventoRepository(id, data);
  return eventoAt;
}

async function deleteEventoService(id) {
  const evento = await eventoRepositories.getEventoByIdRepository(id);
  if (!evento) throw new Error("Evento não encontrado");
  await eventoRepositories.deleteEventoRepository(id);
  return;
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
  deleteEventoService,
  getEventoByStatusService,
};
