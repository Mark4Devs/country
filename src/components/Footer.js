import { BsInstagram, BsFacebook } from 'react-icons/bs';

function Footer() {
    return(
      <footer>
          <div className='section pt-5 pb-5'>
          <div className='contacts-container'>
            <h3 className='heading mb-5'>Контакти</h3>
            <div className='info'>
              <h5>Назва</h5>
              <p>
               Благодійна організація "Міжнародний Благодійний Фонд "Країна Миру""
              </p>
              <h5>Адреса</h5>
              <span>121 Rexford Str., West-Side Av., New York<br/>NY-92103-9000</span>
            </div>
            <div className='info'>
              <h5>Соцмережі:</h5>
              <span><a href="https://www.facebook.com/Країна-Миру-Country-of-Peace-112502804794164/"><BsFacebook/> Facebook</a></span>
              <span><a href="https://instagram.com/countryofpeace.ua?igshid=YmMyMTA2M2Y/"><BsInstagram/> Instagram</a></span>  
              <h5 className='mt-4'>Телефон:</h5>
              <span>+380 60 983 08 42</span><br/>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
