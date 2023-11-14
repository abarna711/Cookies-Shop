import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart } from 'react-icons/fi';
import logo from './image/logo.png';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


function Menubar(){
  const navbarStyles = {
    position: 'fixed',
    width: '100%',
  }
 

  const cart = useSelector(state => state.cart);


  const cartItemCount = Array.isArray(cart) ? cart.length : 0;

  
return(
  <div className='container-fulid'>
    <div >


      <Navbar expand="lg" className=" navbar fixed-top " style={{ ...navbarStyles }}>
        <Navbar.Brand href="/" className='logo'><img src={logo} alt='logo' className='img-fluid'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menubar' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Link to="/home" className='nav-link'>HOME</Link>
            <Link to="/about" className='nav-link'>ABOUT</Link>
            <Link to="/ingredient" className='nav-link'>INGREDIENTS</Link>
            <Link to="/delivery" className='nav-link'>DELIVERY</Link>
            <Link to="/product" className='nav-link'>PRODUCT</Link>
            <Link to="/contact" className='nav-link'>CONTACTS</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='fixed-top'>
      <div className='icon'style={{fontSize:'20px'}}>
         <Link to='/cart' >
          <FiShoppingCart style={{color:"black"}}/>
          <span className="badge" style={{ color: 'black' }}>{cartItemCount}</span>

         </Link>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
);
 }

export default Menubar;  