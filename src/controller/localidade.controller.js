import localidadeService from "../service/localidade.service.js";

async function createLocalidadeController(req, res) {
  try {
    const localidade = await localidadeService.createLocalidadeService(
      req.body
    );
    return res.status(201).send(localidade);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function updateLocalidadeController(req, res) {
  const id = req.params.id;
  try {
    const localidade = await localidadeService.updateLocalidadeService(
      id,
      req.body
    );
    return res.status(200).send(localidade);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function deleteLocalidadeController(req, res) {
  const id = req.params.id;
  try {
    await localidadeService.deleteLocalidadeService(id);
    return res.status(200).send({ message: "Localidade deletada com sucesso" });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function getAllLocalidadeController(req, res) {
  try {
    const localidades = await localidadeService.getAllLocalidadeService();
    return res.status(200).send(localidades);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function getLocalidadeByIdController(req, res) {
  try {
    const localidade = await localidadeService.getLocalidadeById(req.params.id);
    return res.status(200).send(localidade);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default {
  createLocalidadeController,
  getAllLocalidadeController,
  getLocalidadeByIdController,
  updateLocalidadeController,
  deleteLocalidadeController,
};
