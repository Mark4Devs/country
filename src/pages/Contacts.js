import { FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'; 
import { HiMail } from 'react-icons/hi'; 
function Contacts(){
    return(
        <div>
        <header className="header">
          <Navbar className='bg-light' expand="lg" fixed='top'>
          <div className='header-outline'>
              <Button>English</Button>
              <Button className='btn active'>Українська</Button>

            <div className='header-info'>
              <span>+380 60 983 08 42</span>
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
        <div className="contacts-page">
            <div className="contacts-item">
                <FaPhone/>
                <span>+380 XX XXX XX XX</span>
            </div>
            <div className="contacts-item">
                <MdLocationOn/>
                <span>121 Rexford Str., West-Side Av., New York NY-92103-9000</span>
            </div>
            <div className="contacts-item">
                <HiMail/>
                <span>countryofpeace@gmail.com</span>
            </div>
        </div>
        </div>
    )
}
export default Contacts;
