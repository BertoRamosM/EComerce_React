import { useReducer } from "react";
import { createContext, useState } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

//create context
export const CartContext = createContext();


export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  
  const addToCart = product => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }


  const removeFromCart = product => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    })
  }
  //check the function inside the reducer
  ////////////////////////////////////////////////
  /* const addToCart = (product) => {
    //simple way to add product to cart
    //creates a copy of the cart and the new product
    //setCart([...cart, product]) <--too simple
    //a better way, its to check if current product its already in the

    //check the index of the product and try to find it inside the cart
    const productInCartIndex = cart.findIndex((item) => {
      return item.id === product.id;
    });

    //if its true, then the index its not zero...
    if (productInCartIndex >= 0) {
      //here we create a copy of the array and assign in a new variable
      const newCart = structuredClone(cart);
      //get the item inside the cart by the index and add +1
      newCart[productInCartIndex].quantity += 1;
      //set the cart
      return setCart(newCart);
    }

    //but IF product not in cart....
    //use the previous state from the cart
    setCart((prevState) => [
      ...prevState,
      //and add the new product by changing his quantity on 1
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
 */

  //remove an item from cart
  /* const removeFromCart = (product) => {
    setCart((prevState) =>
      prevState.filter((item) => {
        return item.id !== product.id;
      })
    );
  };

  //clear the cart
  const clearCart = () => {
    setCart([]);
  }; */
  ////////////////////////////////////////////
  


  return (
    <CartContext.Provider
      value={{
        //we pass the state because we use the reducer!!!!!
        cart : state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
