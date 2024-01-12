import './Footer.css'

const Footer = ({filters}) => {
  return (
    <footer className="footer">
      <h4>Filters:</h4>
      {
        JSON.stringify(filters, null, 2)
      }
     {/*  <h4>Shopping Cart Test</h4>
      <span href="">BertoRamosM</span>
      <h5>Learning useContext and useReducer</h5>
      <p>{filters}</p> */}
    </footer>
  );
}
 
export default Footer;