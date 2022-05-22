

function Donate(){
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
        </div>
    )
}

export default Donate;
