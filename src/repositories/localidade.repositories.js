// import Localidade from "../models/Localidade.js";

// async function createLocalidadeRepository(data) {
//   return Localidade.create(data);
// }

// async function updateLocalidadeRepository(id, data) {
//   return Localidade.findOneAndUpdate({ _id: id }, data, { new: true });
// }

// async function deleteLocalidadeRepository(id) {
//   return Localidade.findByIdAndDelete(id);
// }

// async function getAllLocalidadeRepository() {
//   return Localidade.find().sort({ _id: -1 });
// }

// async function getLocalidadeByIdRepository(id) {
//   return Localidade.findById(id);
// }

// export default {
//   createLocalidadeRepository,
//   getAllLocalidadeRepository,
//   getLocalidadeByIdRepository,
//   updateLocalidadeRepository,
//   deleteLocalidadeRepository,
// };


import db from "../database/database.js";

const supabase = db.supabase

async function createLocalidadeRepository(data) {
  const { data: localidade, error } = await supabase
    .from('localidade')  // Nome da tabela no Supabase
    .insert([data])
    .single();  // Retorna um único registro inserido
  
  if (error) {
    throw new Error(error.message);
  }
  
  return localidade;
}

async function updateLocalidadeRepository(id, data) {
  const { data: localidade, error } = await supabase
    .from('localidade')
    .update(data)
    .eq('id', id)
    .single();  // Retorna um único registro atualizado
  
  if (error) {
    throw new Error(error.message);
  }

  return localidade;
}

async function deleteLocalidadeRepository(id) {
  const { data, error } = await supabase
    .from('localidade')
    .delete()
    .eq('id', id);
  
  if (error) {
    throw new Error(error.message);
  }
  
  return data;  // Retorna o(s) registro(s) deletado(s)
}

async function getAllLocalidadeRepository() {
  const { data, error } = await supabase
    .from('localidade')
    .select('*')
    .order('id', { ascending: false });  // Ordena pelo ID de forma decrescente
  
  if (error) {
    throw new Error(error.message);
  }
  
  return data;  // Retorna todos os registros
}

async function getLocalidadeByIdRepository(id) {
  const { data, error } = await supabase
    .from('localidade')
    .select('*')
    .eq('id', id)
    .single();  // Retorna um único registro
  
  if (error) {
    throw new Error(error.message); 
  }
  
  return data;  // Retorna o registro encontrado
}

export default {
  createLocalidadeRepository,
  getAllLocalidadeRepository,
  getLocalidadeByIdRepository,
  updateLocalidadeRepository,
  deleteLocalidadeRepository,
};
