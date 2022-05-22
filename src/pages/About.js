import { Carousel } from "react-bootstrap";
import { Navbar, Nav, Button } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import Team from '../components/Team';

function About(){
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
            <div className="about-container">
                <div className="sliders-container">
                    <Carousel className="carousel-about" interval="3000">
                        <Carousel.Item>
                        <div className='image-holder'></div> 
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='image-holder'></div>
                        </Carousel.Item>
                    </Carousel>
                    <div className="text-slider">
                            <Carousel className="carousel-text" interval="4000">
                                <Carousel.Item>
                                <Carousel.Caption>
                                    <h3>Cтворимо Україну Країною Миру разом!</h3>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                <Carousel.Caption>
                                    <Button>Підтримай!</Button>
                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                    </div>
                    <Carousel className="carousel-about" interval="3500">
                        <Carousel.Item>
                        <div className='image-holder'></div>
                        </Carousel.Item>
                        <Carousel.Item className="about-slide">
                        <div className='image-holder'></div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="description-container">
                    <div>
                        <h3>"Країна Миру" - Хто ми?</h3>
                        <p>                    
                            Ми - звичайні люди. Нами рушить бажання допомогти.
                            Ми вкладаємо свій час, свої сили, таланти та ресурси у втілення корисних проектів допомоги всім хто її потребує. 
                            Ми віримо в Україну та її перемогу і робимо для цього все, що можемо. 
                            Давайте створимо Україну Країною Миру разом!
                        </p>
                    </div>
                </div>
            </div>
        <Team />
        </div>
    )

    }

export default About; 
