import User from "../models/User.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user || user.password !== password) {
    throw new Error("Nieprawidłowy login lub hasło");
  }
  const token = jwt.sign({ userId: user._id }, config.secretKey);
  return token;
};

export const register = async (username, password, email) => {
  const user = new User({ username, password, email });
  await user.save();
  return user;
};
