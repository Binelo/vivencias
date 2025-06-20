import localidadeRepositories from "../repositories/localidade.repositories.js";

async function createLocalidadeService(data) {
  const localidade = await localidadeRepositories.createLocalidadeRepository(
    data
  );
  return localidade;
}

async function updateLocalidadeService(id, data) {
  const localidade = await localidadeRepositories.getLocalidadeByIdRepository(
    id
  );
  if (!localidade) throw new Error("Localidade não encontrada");
  const localidadeAt = await localidadeRepositories.updateLocalidadeRepository(
    id,
    data
  );
  return localidadeAt;
}

async function deleteLocalidadeService(id) {
  const localidade = await localidadeRepositories.getLocalidadeByIdRepository(
    id
  );
  if (!localidade) throw new Error("Localidade não encontrada");
  await localidadeRepositories.deleteLocalidadeRepository(id);
  return { message: "Localidade deletada com sucesso" };
}

async function getAllLocalidadeService() {
  const localidades = await localidadeRepositories.getAllLocalidadeRepository();
  if (localidades.length == 0) throw new Error("Nenhuma localidade Encontrado");

  return localidades;
}

async function getLocalidadeById(id) {
  const localidade = await localidadeRepositories.getLocalidadeByIdRepository(
    id
  );
  if (!localidade) throw new Error("Localidade não encontrado");

  return localidade;
}

export default {
  createLocalidadeService,
  getAllLocalidadeService,
  getLocalidadeById,
  updateLocalidadeService,
  deleteLocalidadeService,
};
