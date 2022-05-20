import { Navbar, Nav, Button } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';

function Header () {
    return (
    <header className="header">
          <Navbar className='bg-light' expand="lg" fixed='top'>
          <div className='header-outline'>
              <Button>English</Button>
              <Button className='btn active'>Українська</Button>

            <div className='header-info'>
              <span>+380 XX XXX XX XX</span>
              <span>countryofpeace@gmail.com</span>
            </div>
          </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand to="/"><img src='images/logo.png'/></Navbar.Brand>
            <Navbar.Collapse className='nav-bar'>
              <Nav className='navigation'>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Головна</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Про нас</NavLink>
                <NavLink to="/donate" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Реквізити</NavLink>
                <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Контакти</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </header>
    );
}

export default Header;