import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    tipo_usuario: {
        type: Number,
        required: true,
    },
    cpf_cnpj : {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telefone: {
        type: Number,
        required: true,
    },
    tipo_acesso: {
        type: String,
        required: true,
        default: "user"
    }
})

const Usuario = mongoose.model("Usuario", UserSchema);
export default Usuario;