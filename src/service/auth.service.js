import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import userRepositories from "../repositories/usuario.repositories.js";

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 175000 });
}

const loginService = async ({ email, senha }) => {
  const user = await userRepositories.findByEmailUserRepository(email);

  if (!user) throw new Error("Wrong password or email");
  const isPasswordValid = await bcrypt.compare(senha, user.senha);

  if (!isPasswordValid) throw new Error("Invalid password");

  const token = generateToken(user.id);

  return token;
};

export default { loginService, generateToken };
