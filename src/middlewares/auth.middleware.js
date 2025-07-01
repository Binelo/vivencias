import "dotenv/config";
import jwt from "jsonwebtoken";
// import employeeRepositories from "../repositories/employee.repositories.js";
import userRepositories from "../repositories/usuario.repositories.js";

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({ message: "The token was not informed!" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2)
    return res.status(401).send({ message: "Invalid token!" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "Malformed Token!" });

  jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
    if (err) return res.status(401).send({ message: "Invalid token!" });

    const employee = await userRepositories.getUserByIdRepository(decoded.id);
    if (!employee || !employee.id)
      return res.status(401).send({ message: "Invalid token!" });

    req.employeeId = employee.id;

    return next();
  });
}

export default authMiddleware;
