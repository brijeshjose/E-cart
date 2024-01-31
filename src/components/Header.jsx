import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Header() {
  const whishlist=useSelector((state)=>state.wishlistReducer)
  const cart=useSelector((state)=>state.cartReducer)
  return (
    <>
     <Navbar style={{zIndex:1}} expand="lg" className="bg-info position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand > <Link to={'/'}  style={{color:'white',fontWeight:'bold',textDecoration:'none'}}> <i class="fa-solid fa-truck-fast fa-bounce"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/Whishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'red',fontWeight:'bold'}}>Whishlist
            <Badge className='rounded ms-2 bg-success'>{whishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link><Link to={'/Cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'red',fontWeight:'bold'}}>Cart
            <Badge className='rounded ms-2 bg-success'> {cart.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header