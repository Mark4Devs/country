import { Carousel } from 'react-bootstrap';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import ukrLang from '../db.json';
import enLang from '../db.json';
import { useState } from 'react';

function Home() {
     const ukrItem = ukrLang.ukrLang;
     const enItem = ukrLang.enLang;
     const [langActive, setLang] = useState(true);
    const toggleLang = () => {
        setLang(true);
      };
      const toggleLangNext = () => {
        setLang(false);
      };
    return (
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
                     {langActive ? ukrItem.map(item => (<NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-2']}</NavLink>)) : enItem.map(item => (<NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-2']}</NavLink>))} 
                     {langActive ? ukrItem.map(item => (<NavLink to="/donate" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-3']}</NavLink>)) : enItem.map(item => (<NavLink to="/donate" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-3']}</NavLink>))} 
                     {langActive ? ukrItem.map(item => (<NavLink to="/contacts" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-4']}</NavLink>)) : enItem.map(item => (<NavLink to="/contacts" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-4']}</NavLink>))} 
                   </Nav>
                 </Navbar.Collapse>
               </Navbar>
           </header>
        <div className='home'>
                      {langActive ? ukrItem.map(item => ( <Carousel>
                <Carousel.Item>
                  <div className='image-holder'></div>
                  <Carousel.Caption>
                    <h3>{item['ukr-home-slide-1']}</h3>
                    <p>{item['ukr-home-slide-d-1']}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='image-holder'></div>
                  <Carousel.Caption>
                    <h3>{item['ukr-home-slide-2']}</h3>
                    <p>{item['ukr-home-slide-d-2']}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='image-holder'></div>
                  <Carousel.Caption>
                    <h3>{item['ukr-home-slide-3']}</h3>
                    <p>{item['ukr-home-slide-d-3']}</p>
                  </Carousel.Caption>
                </Carousel.Item>
               </Carousel>))
            : enItem.map(item => ( <Carousel>
                <Carousel.Item>
                  <div className='image-holder'></div>
                  <Carousel.Caption>
                    <h3>{item['en-home-slide-1']}</h3>
                    <p>{item['en-home-slide-d-1']}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='image-holder'></div>
                  <Carousel.Caption>
                    <h3>{item['en-home-slide-2']}</h3>
                    <p>{item['en-home-slide-d-2']}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='image-holder'></div>
                  <Carousel.Caption>
                    <h3>{item['en-home-slide-3']}</h3>
                    <p>{item['en-home-slide-d-3']}</p>
                  </Carousel.Caption>
                </Carousel.Item>
               </Carousel>))}
          <div className='home-desc'>
            {langActive ? ukrItem.map(item => (<div className='text-container'>
                <h4>{item['ukr-desc-home-title']}</h4>
              <p>
                {item['ukr-home-desc']}
              </p>
            </div>)) : enItem.map(item => (<div className='text-container'>
                <h4>{item['en-desc-home-title']}</h4>
              <p>
                {item['en-home-desc']}
              </p>
            </div>))}
            <div className='video-container'>
              <video controls>
                <source src="/images/Kraina-miru.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
          <div className='action-container'>
            <div className='images-action-container'>
              <div className='action-image'></div>
              <div className='action-image'></div>
              <div className='action-image'></div>
              <div className='action-image'></div>
                { langActive ? ukrItem.map(item => ( <div className='text-action'>
                <h4>{item['ukr-action-heading']}</h4>
                <p>{item['ukr-action-desc']}</p>
                <Button>DONATE</Button>
              </div>)) : enItem.map(item => ( <div className='text-action'>
                <h4>{item['en-action-heading']}</h4>
                <p>{item['en-action-desc']}</p>
                <Button>DONATE</Button>
              </div>))}
            </div>
          </div>
        </div>
          <footer>
               <div className='section pt-5 pb-5'>
               {langActive ? ukrItem.map(item => ( <div className='contacts-container'>
                 <h3 className='heading mb-5'>{item['ukr-footer-heading']}</h3>
                   <div className='info'>
                   <h5>{item['ukr-footer-name-h']}</h5>
                   <p>
                         {item['ukr-footer-name-desc']}
                   </p>
                   <h5>{item['ukr-footer-address-h']}</h5>
                   <span>{item['ukr-footer-address-desc']}</span>
                 </div>
                 <div className='info'>
                   <h5>{item['ukr-footer-social']}</h5>
                   <span><a href="https://www.facebook.com/Країна-Миру-Country-of-Peace-112502804794164/"><BsFacebook/> Facebook</a></span>
                   <span><a href="https://instagram.com/countryofpeace.ua?igshid=YmMyMTA2M2Y/"><BsInstagram/> Instagram</a></span>  
                   <h5 className='mt-4'>{item['ukr-footer-phone']}</h5>
                   <span>+380 60 983 08 42</span><br/>
                 </div>
               </div>)) : enItem.map(item => ( <div className='contacts-container'>
                 <h3 className='heading mb-5'>{item['en-footer-heading']}</h3>
                   <div className='info'>
                   <h5>{item['en-footer-name-h']}</h5>
                   <p>
                         {item['en-footer-name-desc']}
                   </p>
                   <h5>{item['en-footer-address-h']}</h5>
                   <span>{item['en-footer-address-desc']}</span>
                 </div>
                 <div className='info'>
                   <h5>{item['en-footer-social']}</h5>
                   <span><a href="https://www.facebook.com/Країна-Миру-Country-of-Peace-112502804794164/"><BsFacebook/> Facebook</a></span>
                   <span><a href="https://instagram.com/countryofpeace.ua?igshid=YmMyMTA2M2Y/"><BsInstagram/> Instagram</a></span>  
                   <h5 className='mt-4'>{item['en-footer-phone']}</h5>
                   <span>+380 60 983 08 42</span><br/>
                 </div>
               </div>))
             </div>
           </footer>
     </div>
    )
}

export default Home;
