import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();

// Połączenie z bazą danych
mongoose
  .connect("mongodb://localhost:27017/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database:", err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routery
app.use(authRoutes);
app.use(productRoutes);
app.use(cartRoutes);

// Strona główna
app.get("/", (req, res) => {
  res.render("index");
});

// Renderowanie widoków
app.set("views", "./views");
app.set("view engine", "ejs");

// Nasłuchiwanie na porcie 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
