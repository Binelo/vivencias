import Segmento from "../models/Segmento.js";

async function createSegmentoRepository(data) {
  return Segmento.create(data);
}

async function updateSegmentoRepository(id, data) {
  return Segmento.findOneAndUpdate({ _id: id }, data, { new: true });
}

async function deleteSegmentoRepository(id) {
  return Segmento.findByIdAndDelete(id);
}

async function getAllSegmentoRepository() {
  return Segmento.find().sort({ _id: -1 });
}

async function getSegmentoByIdRepository(id) {
  return Segmento.findById(id);
}

export default {
  createSegmentoRepository,
  getAllSegmentoRepository,
  getSegmentoByIdRepository,
  updateSegmentoRepository,
  deleteSegmentoRepository,
};
