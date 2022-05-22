import { Navbar, Nav, Button } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import ukrLang from '../db.json';
import enLang from '../db.json';
import { useState } from 'react';
import { BsInstagram, BsFacebook } from 'react-icons/bs';

function Donate(){
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
                     {langActive ? ukrItem.map(item => (<NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-2']}</NavLink>)) : enItem.map(item => (<NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-2']}</NavLink>))} 
                     {langActive ? ukrItem.map(item => (<NavLink to="/donate" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-3']}</NavLink>)) : enItem.map(item => (<NavLink to="/donate" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-3']}</NavLink>))} 
                     {langActive ? ukrItem.map(item => (<NavLink to="/contacts" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['ukr-menu-4']}</NavLink>)) : enItem.map(item => (<NavLink to="/contacts" className={({ isActive }) => (isActive ? 'link active' : 'link')}>{item['en-menu-4']}</NavLink>))} 
                   </Nav>
                 </Navbar.Collapse>
               </Navbar>
           </header>
        <div className="container-donate">
            <div className="section">
                <ul>
                    <li>Company details / Unternehmendetails</li>
                    <li>Company Name / Firmenname</li>
                    <li>CO ICF COUNTRY OF PEACE, Poltava, Ukraine</li>
                    <li>IBAN Code: UA713071230000026002011055823</li>
                </ul>
                <ul>
                    <h5>(UA)</h5>
                    <li>Name of the bank / Name der Bank</li>
                    <li>PJSC "BANK VOSTOK", 24 Kursantska street, Dnipro 49051, Ukraine</li>
                    <li>SWIFT code банку / Bank SWIFT Code / BIC: ACJCUA2N</li>
                    <li>CO ICF COUNTRY OF PEACE, Poltava, Ukraine</li>
                </ul>
                <ul>
                    <h5>(EU)</h5>
                    <li>Name of the bank / Name der Bank</li>
                    <li>Reiffeisein Bank Internationa AG, Vienna, Austria</li>
                    <li>SWIFT CODE: RZBAATWW</li>
                </ul>
                <ul>
                    <h5>(USD)</h5>
                    <li>Name of the bank / Name der Bank</li>
                    <li>BANK OF NEW YORK MELLON</li>
                    <li>New York, UASSWIFT CODE: IRVTUS3N</li>
                    <li>Company address / Fimenadresse UA 36000, Poltava, street Evropeiska, bldg. 6 </li>
                    <li>Purpose of Payment: "Charitable assistance"</li>

                    <h6>БЛАГОДІЙНА ОРГАНІЗАЦІЯ "МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД "КРАЇНА МИРУ""</h6>
                    <h4>ЄДРПОУ: 44769656, р/р UA713071230000026002011055823 ПАТ "Банк Восток"</h4>
                </ul> 
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
               </div>))}
             </div>
           </footer> 
        </div>
    )
}

export default Donate;
