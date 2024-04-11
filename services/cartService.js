import Cart from "../models/Cart.js";

export const getCartByUserId = async (userId) => {
  try {
    const cart = await Cart.findOne({ userId }).populate("products");
    return cart;
  } catch (error) {
    throw new Error("Nie można znaleźć koszyka użytkownika");
  }
};

export const addToCart = async (userId, productId) => {
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [productId] });
    } else {
      if (!cart.products.includes(productId)) {
        cart.products.push(productId);
      }
    }
    await cart.save();
    return cart;
  } catch (error) {
    throw new Error("Nie można dodać produktu do koszyka");
  }
};

export const checkout = async (userId) => {
  try {
    const cart = await Cart.findOneAndDelete({ userId });
    return cart;
  } catch (error) {
    throw new Error("Nie można zrealizować zakupu");
  }
};
