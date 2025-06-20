// import mongoose from "mongoose";

// const EventoSchema = new mongoose.Schema({
//     nome: {
//         type: String,
//         required: true,
//     },
//     data: {
//         type: Date,
//         required: true,
//     },
//     horario_inicio: {
//         type: String,
//         required: true,
//     },
//     horario_fim: {
//         type: String,
//         required: true,
//     },
//     id_usuario: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Usuario',
//         required: true,
//     },
//     id_segmento: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Segmento',
//         required: true,
//     },
//     id_localidade: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Localidade',
//         required: true,
//     },
//     descricao: {
//         type: String,
//         required: true,
//     },
//     imagem_banner_1: {
//         type: Buffer,
//         required: true,
//     },
//     status_aprovacao: {
//         type: String,
//         default: "pendente",
//     },
// });

// const Evento = mongoose.model("Evento", EventoSchema);
// export default Evento;
