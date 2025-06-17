import mongoose from "mongoose";

const LocalidadeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    cep: {
        type: Number,
        required: true,
    },
    capacidade: {
        type: Number,
        required: true,
    },
});

const Localidade = mongoose.model("Localidade", LocalidadeSchema);
export default Localidade;
