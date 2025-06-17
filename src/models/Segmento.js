import mongoose from "mongoose";

const SegmentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    }
})

const Segmento = mongoose.model("Segmento", SegmentoSchema);
export default Segmento;