import Usuario from "../models/Usuario.js";

async function createUserRepository(data) {
  return Usuario.create(data);
}

async function updateUserRepository(id, data) {
  return Usuario.findOneAndUpdate({ _id: id }, data, { new: true });
}

async function deleteUserRepository(id) {
  return Usuario.findByIdAndDelete(id);
}

async function getAllUserRepository() {
  return Usuario.find().sort({ _id: -1 });
}

async function getUserByIdRepository(id) {
  return Usuario.findById(id);
}

export default {
  createUserRepository,
  getAllUserRepository,
  getUserByIdRepository,
  updateUserRepository,
  deleteUserRepository,
};
