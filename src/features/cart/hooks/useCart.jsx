import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../state/cartSlice";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useCart = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { cartItems } = useSelector((state) => state.cart);

  const [isAdded, setIsAdded] = useState(false);

  const addCartItem = (product) => {
    console.log("product arricved");
    let productExists = cartItems.some((val) => val.id === product.id);

    if (productExists) {
      setIsAdded(true);
    }

    let updatedProduct = { ...product, quantity: 1, isAdded: true };
    dispatch(addToCart(updatedProduct));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return {
    dispatch,
    addCartItem,
    cartItems,
    navigate,
    subtotal,
    totalItems,
    isAdded,
    setIsAdded,
  };
};
