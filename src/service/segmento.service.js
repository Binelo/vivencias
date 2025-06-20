import segmentoRepositories from "../repositories/segmento.repositories.js";

async function createSegmentoService(data) {
  const segmento = await segmentoRepositories.createSegmentoRepository(data);
  return segmento;
}

async function updateSegmentoService(id, data) {
  const segmento = await segmentoRepositories.getSegmentoByIdRepository(id);
  if (!segmento) throw new Error("Segmento não encontrado");
  const segmentoAt = await segmentoRepositories.updateSegmentoRepository(
    id,
    data
  );
  return segmentoAt;
}

async function deleteSegmentoService(id) {
  const segmento = await segmentoRepositories.getSegmentoByIdRepository(id);
  if (!segmento) throw new Error("Segmento não encontrado");
  await segmentoRepositories.deleteSegmentoRepository(id);
  return { message: "Segmento deletado com sucesso" };
}

async function getAllSegmentoService() {
  const segmentos = await segmentoRepositories.getAllSegmentoRepository();
  if (segmentos.length == 0) throw new Error("Nenhum segmento Encontrado");

  return segmentos;
}

async function getSegmentoById(id) {
  const segmento = await segmentoRepositories.getSegmentoByIdRepository(id);
  if (!segmento) throw new Error("Segmento não encontrado");

  return segmento;
}

export default {
  createSegmentoService,
  getAllSegmentoService,
  getSegmentoById,
  updateSegmentoService,
  deleteSegmentoService,
};
