import userRepositories from "../repositories/usuario.repositories.js";

async function createUserService(data) {
  const user = await userRepositories.createUserRepository(data);
  return user;
}

async function updateUserService(id, data) {
  const user = await userRepositories.getUserByIdRepository(id);
  if (!user) throw new Error("Usuário não encontrado");
  const userAt = await userRepositories.updateUserRepository(id, data);
  return userAt;
}

async function deleteUserService(id) {
  const user = await userRepositories.getUserByIdRepository(id);
  if (!user) throw new Error("Usuário não encontrado");
  await userRepositories.deleteUserRepository(id);
  return { message: "Usuário deletado com sucesso" };
}

async function getAllUserService() {
  const users = await userRepositories.getAllUserRepository();
  if (users.length == 0) throw new Error("Nenhum usuário encontrado");

  return users;
}

async function getUserById(id) {
  const user = await userRepositories.getUserByIdRepository(id);
  if (!user) throw new Error("Usuário não encontrado");

  return user;
}

export default {
  createUserService,
  getAllUserService,
  getUserById,
  updateUserService,
  deleteUserService,
};
