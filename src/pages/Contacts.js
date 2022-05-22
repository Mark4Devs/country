import { FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'; 
import { HiMail } from 'react-icons/hi'; 
import { Navbar, Nav, Button } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';

import { useState } from 'react';

function Contacts(){
        const ukrItem = ukrLang.ukrLang;
     const enItem = ukrLang.enLang;
     const [langActive, setLang] = useState(true);
    const toggleLang = () => {
        setLang(true);
      };
      const toggleLangNext = () => {
        setLang(false);
      };
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
