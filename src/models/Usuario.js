// *** Não é necessário ***

// import { Sequelize, DataTypes } from 'sequelize';

// // Criar uma instância do Sequelize (conectando ao banco)
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   logging: false, // para desabilitar logs do SQL
// });

// const Usuario = sequelize.define('Usuario', {
//   nome: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   tipo_usuario: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   cpf_cnpj: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   senha: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true, // Adicionando a restrição de unicidade
//   },
//   telefone: {
//     type: DataTypes.BIGINT, // O tipo BIGINT é ideal para números de telefone grandes
//     allowNull: false,
//   },
//   tipo_acesso: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'user',
//   },
// }, {
//   timestamps: false, // Se você não quiser usar os campos createdAt/updatedAt
//   tableName: 'usuario', // Define o nome da tabela no banco (caso não queira o nome padrão)
// });

// // Sincronizar o modelo com o banco de dados (criar tabela, se necessário)
// const syncDatabase = async () => {
//   try {
//     await sequelize.sync({ force: false }); // force: true recria a tabela, force: false não altera a tabela
//     console.log("Banco de dados Usuario sincronizado!");
//   } catch (error) {
//     console.error("Erro ao sincronizar o banco Usuario:", error);
//   }
// };

// syncDatabase(); // Chama a função para garantir que a tabela esteja criada

// export default Usuario;
