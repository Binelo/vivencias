import Localidade from "../models/Localidade.js";

async function createLocalidadeRepository(data) {
  return Localidade.create(data);
}

async function updateLocalidadeRepository(id, data) {
  return Localidade.findOneAndUpdate({ _id: id }, data, { new: true });
}

async function deleteLocalidadeRepository(id) {
  return Localidade.findByIdAndDelete(id);
}

async function getAllLocalidadeRepository() {
  return Localidade.find().sort({ _id: -1 });
}

async function getLocalidadeByIdRepository(id) {
  return Localidade.findById(id);
}

export default {
  createLocalidadeRepository,
  getAllLocalidadeRepository,
  getLocalidadeByIdRepository,
  updateLocalidadeRepository,
  deleteLocalidadeRepository,
};
