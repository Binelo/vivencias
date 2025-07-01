// import mongoose from "mongoose";

// function connectDatabase() {
//   mongoose
//     .connect(process.env.DATABASE_URL)
//     .then(() => console.log("MongoDB Atlas Connected!"))
//     .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`));
// }

// export default connectDatabase;

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Função para testar a conexão com o Supabase
function connectDatabase() {
  supabase
    .from("usuario")
    .select("*")
    .then(({ data, error }) => {
      if (error) {
        console.error("Erro ao conectar no Supabase:", error);
      } else {
        console.log("Conexão com Supabase bem-sucedida!");
      }
    });
}

export default { supabase, connectDatabase };
