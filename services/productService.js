import Product from "../models/Product.js";

export const getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw new Error("Nie można znaleźć produktu");
  }
};

export const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error("Nie można pobrać produktów");
  }
};
