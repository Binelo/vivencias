import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import userRepositories from "../repositories/usuario.repositories.js";

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 175000 });
}

const loginService = async ({ email, password }) => {
  const employee = await userRepositories.findByEmailUserRepository(email);

  if (!employee) throw new Error("Wrong password or email");
  const isPasswordValid = await bcrypt.compare(password, employee.password);

  if (!isPasswordValid) throw new Error("Invalid password");

  if (!employee.active) throw new Error("Login is not active");

  const token = generateToken(employee.id);

  return token;
};

export default { loginService, generateToken };
