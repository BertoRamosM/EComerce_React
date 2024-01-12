import { useContext } from "react";
import { CartContext } from "../context/cart";
import { Children } from "react";

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within Cart Provider')
  }
  return context
}