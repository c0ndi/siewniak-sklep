import authService from "../services/authService.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const newUser = await authService.register(username, password, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
