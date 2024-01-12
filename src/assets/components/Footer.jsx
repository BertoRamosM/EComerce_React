import { useCart } from '../../hooks/useCart';
import './Footer.css'


const Footer = () => {
  const { cart } = useCart()
  return (
    <footer className="footer">
      {/* <h4>Shopping Cart Test w/ React</h4>
      <span>BertoRamosM</span>
      <h5>Learning useContext and useReducer</h5> 
      */}
      {JSON.stringify(cart, null, 2) }
    </footer>
  );
}
 
export default Footer;