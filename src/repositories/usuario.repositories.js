// import Usuario from "../models/Usuario.js";

// async function createUserRepository(data) {
//   return Usuario.create(data);
// }

// async function updateUserRepository(id, data) {
//   return Usuario.findOneAndUpdate({ _id: id }, data, { new: true });
// }

// async function deleteUserRepository(id) {
//   return Usuario.findByIdAndDelete(id);
// }

// async function getAllUserRepository() {
//   return Usuario.find().sort({ _id: -1 });
// }

// async function getUserByIdRepository(id) {
//   return Usuario.findById(id);
// }

// export default {
//   createUserRepository,
//   getAllUserRepository,
//   getUserByIdRepository,
//   updateUserRepository,
//   deleteUserRepository,
// };



import db from "../database/database.js";

const supabase = db.supabase

async function createUserRepository(data) {
  const { data: usuario, error } = await supabase
    .from('usuario')
    .insert([
      {
        nome: data.nome,
        tipo_usuario: data.tipo_usuario,
        cpf_cnpj: data.cpf_cnpj,
        senha: data.senha,
        email: data.email,
        telefone: data.telefone,
        tipo_acesso: data.tipo_acesso || 'user',
      },
    ])
    .single();  // Retorna apenas um item (um único usuário)

  if (error) {
    throw new Error(error.message); 
  }

  return usuario;
}

async function updateUserRepository(id, data) {
  const { data: usuario, error } = await supabase
    .from('usuario')
    .update(data)  // Passa os dados que você quer atualizar
    .match({ id })  // Usando 'id' para buscar o usuário
    .single();  // Retorna um único usuário atualizado

  if (error) {
    throw new Error(error.message);
  }

  return usuario;
}

async function deleteUserRepository(id) {
  const { data, error } = await supabase
    .from('usuario')
    .delete()
    .match({ id });  // Deleta o usuário com o 'id' correspondente

  if (error) {
    throw new Error(error.message);
  }

  return data;  // Retorna os dados deletados (se necessário)
}

async function getAllUserRepository() {
  const { data, error } = await supabase
    .from('usuario')
    .select('*')  // Seleciona todos os campos da tabela
    .order('id', { ascending: false });  // Ordena pela coluna 'id' em ordem decrescente

  if (error) {
    throw new Error(error.message);
  }

  return data;  // Retorna todos os usuários
}

async function getUserByIdRepository(id) {
  const { data, error } = await supabase
    .from('usuario')
    .select('*')  // Seleciona todos os campos da tabela
    .eq('id', id)  // Busca o usuário pelo id
    .single();  // Retorna um único usuário

  if (error) {
    throw new Error(error.message);
  }

  return data;  // Retorna o usuário encontrado
}

export default {
  createUserRepository,
  getAllUserRepository,
  getUserByIdRepository,
  updateUserRepository,
  deleteUserRepository,
};
