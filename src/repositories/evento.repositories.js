// import Evento from "../models/Evento.js";

// async function createEventoRepository(data) {
//   return Evento.create(data);
// }

// async function updateEventoRepository(id, data) {
//   return Evento.findOneAndUpdate({ _id: id }, data, { new: true });
// }

// async function deleteEventoRepository(id) {
//   return Evento.findByIdAndDelete(id);
// }

// async function getAllEventoRepository() {
//   return Evento.find().sort({ _id: -1 });
// }

// async function getEventoByIdRepository(id) {
//   return Evento.findById(id);
// }

// async function getEventoByStatusRepository(status) {
//   return Evento.find({ status_aprovacao: status }).sort({ _id: -1 });
// }

// export default {
//   createEventoRepository,
//   getAllEventoRepository,
//   getEventoByIdRepository,
//   updateEventoRepository,
//   deleteEventoRepository,
//   getEventoByStatusRepository,
// };

import db from "../database/database.js";

const supabase = db.supabase;

async function createEventoRepository(data) {
  const { data: evento, error } = await supabase
    .from('evento')
    .insert([data])
    .single();  // Retorna um único evento inserido
  
  if (error) {
    throw new Error(error.message); 
  }

  return evento;
}

async function updateEventoRepository(id, data) {
  const { data: evento, error } = await supabase
    .from('evento')
    .update(data)
    .eq('id', id)
    .single();  // Retorna o evento atualizado
  
  if (error) {
    throw new Error(error.message);
  }

  return evento;
}

async function deleteEventoRepository(id) {
  const { data, error } = await supabase
    .from('evento')
    .delete()
    .eq('id', id);
  
  if (error) {
    throw new Error(error.message);
  }

  return data;  // Retorna o(s) evento(s) deletado(s)
}

async function getAllEventoRepository() {
  const { data, error } = await supabase
    .from('evento')
    .select('*')
    .order('id', { ascending: false });  // Ordena os eventos por ID de forma decrescente
  
  if (error) {
    throw new Error(error.message); 
  }

  return data;  // Retorna todos os eventos
}

async function getEventoByIdRepository(id) {
  const { data, error } = await supabase
    .from('evento')
    .select('*')
    .eq('id', id)
    .single();  // Retorna um único evento

  if (error) {
    throw new Error(error.message); 
  }

  return data;  // Retorna o evento encontrado
}

async function getEventoByStatusRepository(status) {
  const { data, error } = await supabase
    .from('evento')
    .select('*')
    .eq('status_aprovacao', status)  // Filtra eventos pelo status
    .order('id', { ascending: false });  // Ordena os eventos por ID de forma decrescente

  if (error) {
    throw new Error(error.message); 
  }

  return data;  // Retorna os eventos filtrados
}

export default {
  createEventoRepository,
  getAllEventoRepository,
  getEventoByIdRepository,
  updateEventoRepository,
  deleteEventoRepository,
  getEventoByStatusRepository,
};
