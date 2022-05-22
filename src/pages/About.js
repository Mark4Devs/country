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
                   <Button onClick={toggleLangNext}>English</Button>
                   <Button onClick={toggleLang} className='btn active'>Українська</Button>

                 <div className='header-info'>
                   <span>+380 60 983 08 42</span>
                   <span>countryofpeace@gmail.com</span>
                 </div>
               </div> 
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Brand to="/"><img src='images/logo.png'/></Navbar.Brand>
                 <Navbar.Collapse className='nav-bar'>
                   <Nav className='navigation'>
                     {langActive ? ukrItem.map(item => (<NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-1']}</NavLink>)) : enItem.map(item => (<NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-1']}</NavLink>))} 
                     {langActive ? ukrItem.map(item => (<NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-2']}</NavLink>)) : enItem.map(item => (<NavLink to="/abot" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-2']}</NavLink>))} 
                     {langActive ? ukrItem.map(item => (<NavLink to="/donate" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-3']}</NavLink>)) : enItem.map(item => (<NavLink to="/donate" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-3']}</NavLink>))} 
                     {langActive ? ukrItem.map(item => (<NavLink to="/contacts" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-4']}</NavLink>)) : enItem.map(item => (<NavLink to="/contacts" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-4']}</NavLink>))} 
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
                    {langActive ? ukrItem.map(item => <div>
                        <h3>"Країна Миру" - Хто ми?</h3>
                        <p>                    
                            {item['ukr-about-desc']}
                        </p>
                    </div>)) : enItem.map(item => <div>
                        <h3>"Країна Миру" - Хто ми?</h3>
                        <p>                    
                            {item['en-about-desc']}
                        </p>
                    </div>)) 
                </div>
            </div>
        <Team />
        </div>
    )

    }

export default About; 
