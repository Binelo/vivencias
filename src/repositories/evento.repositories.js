import Evento from "../models/Evento.js";

async function createEventoRepository(data) {
  return Evento.create(data);
}

async function updateEventoRepository(id, data) {
  return Evento.findOneAndUpdate({ _id: id }, data, { new: true });
}

async function deleteEventoRepository(id) {
  return Evento.findByIdAndDelete(id);
}

async function getAllEventoRepository() {
  return Evento.find().sort({ _id: -1 });
}

async function getEventoByIdRepository(id) {
  return Evento.findById(id);
}

async function getEventoByStatusRepository(status) {
  return Evento.find({ status_aprovacao: status }).sort({ _id: -1 });
}

export default {
  createEventoRepository,
  getAllEventoRepository,
  getEventoByIdRepository,
  updateEventoRepository,
  deleteEventoRepository,
  getEventoByStatusRepository,
};
