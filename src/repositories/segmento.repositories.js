// import Segmento from "../models/Segmento.js";

// async function createSegmentoRepository(data) {
//   return Segmento.create(data);
// }

// async function updateSegmentoRepository(id, data) {
//   return Segmento.findOneAndUpdate({ _id: id }, data, { new: true });
// }

// async function deleteSegmentoRepository(id) {
//   return Segmento.findByIdAndDelete(id);
// }

// async function getAllSegmentoRepository() {
//   return Segmento.find().sort({ _id: -1 });
// }

// async function getSegmentoByIdRepository(id) {
//   return Segmento.findById(id);
// }

// export default {
//   createSegmentoRepository,
//   getAllSegmentoRepository,
//   getSegmentoByIdRepository,
//   updateSegmentoRepository,
//   deleteSegmentoRepository,
// };

import db from "../database/database.js";

const supabase = db.supabase

async function createSegmentoRepository(data) {
  const { data: segmento, error } = await supabase
    .from('segmento') // Nome da tabela
    .insert([data]);

  if (error) {
    throw error;
  }
  return segmento;
}

async function updateSegmentoRepository(id, data) {
  const { data: segmento, error } = await supabase
    .from('segmento')
    .update(data)
    .eq('id', id)
    .single();  // Retorna um único registro atualizado

  if (error) {
    throw error;
  }
  return segmento;
}

async function deleteSegmentoRepository(id) {
  const { data, error } = await supabase
    .from('segmento')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
  return data;
}

async function getAllSegmentoRepository() {
  const { data, error } = await supabase
    .from('segmento')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw error;
  }
  return data;
}

async function getSegmentoByIdRepository(id) {
  const { data, error } = await supabase
    .from('segmento')
    .select('*')
    .eq('id', id)
    .single(); // Retorna um único registro

  if (error) {
    throw error;
  }
  return data;
}

export default {
  createSegmentoRepository,
  getAllSegmentoRepository,
  getSegmentoByIdRepository,
  updateSegmentoRepository,
  deleteSegmentoRepository,
};

