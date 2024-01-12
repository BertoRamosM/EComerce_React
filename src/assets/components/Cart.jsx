import { useId } from 'react';
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './icons'
import './Cart.css'

const Cart = () => {
  const cartCheckboxId = useId();
  return ( 
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type="checkbox"
        id={cartCheckboxId} 
        hidden/>
    </>
   );
}
 
export default Cart;