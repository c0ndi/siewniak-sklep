import productService from "../services/productService.js";

export const renderProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.getProductById(productId);
    res.render("product", { product });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const renderAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.render("collection", { products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
