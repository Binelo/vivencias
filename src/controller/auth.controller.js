import authService from "../service/auth.service.js";

const loginController = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const token = await authService.loginService({ email, senha });
    return res.send(token);
  } catch (e) {
    return res.status(401).send(e.message);
  }
};

export default { loginController };
