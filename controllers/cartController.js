import cartService from "../services/cartService.js";

export const renderCart = async (req, res) => {
  const userId = req.user._id;
  try {
    const cart = await cartService.getCartByUserId(userId);
    res.render("cart", { cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToCart = async (req, res) => {
  const userId = req.user._id;
  const productId = req.body.productId;
  try {
    const updatedCart = await cartService.addToCart(userId, productId);
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkout = async (req, res) => {
  const userId = req.user._id;
  try {
    const cart = await cartService.checkout(userId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
