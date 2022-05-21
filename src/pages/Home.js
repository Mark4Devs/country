import { Carousel, Button} from 'react-bootstrap';
import ukrLang from '../db.json';

function Home() {
     const ukrItem = ukrLang.ukrLang;
    return (
        <div className='home'>
          <Carousel>
            {ukrItem.map(item => (
                <Carousel.Item>
                  <div className='image-holder'></div>
                  <Carousel.Caption>
                    <h3>{item['ukr-home-slide-1']}</h3>
                    <p>{item['ukr-home-slide-d-1']}.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='image-holder'></div>
                  <Carousel.Caption>
                    <h3>{item['ukr-home-slide-2']}</h3>
                    <p>{item['ukr-home-slide-d-2']}.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='image-holder'></div>
                  <Carousel.Caption>
                    <h3>{item['ukr-home-slide-3']}</h3>
                    <p>{item['ukr-home-slide-d-3']}.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            ))}
          </Carousel>
          <div className='home-desc'>
            <div className='text-container'>
              <h4>Благодійна організація "Міжнародний Благодійний Фонд "Країна Миру""</h4>
              <p>
                З перших днів війни ми допомогли десяткам тисяч жінок, 
                дітей та літніх біженців, надаючи їм будь-яку матеріальну 
                та емоційну підтримку. Ми зібрали тони гуманітарноі 
                допомоги для хоробрих військових по всій Україні.
              </p>
              <p>
                Ви не можете уявити, наскільки важливо допомогати, підтримувати, посміхатися і обіймати людей, які були незнайомими людьми, але в цей час подібні до сім'ї.
                Ця війна нагадала нам усім, що життя в нас тільки одне, і якщо ми хочемо щось зробити корисне, це треба робити зараз, бо іншого разу вже може не бути.
                Давайте зробимо Україну Країною Миру разом!
              </p>
            </div>
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
              <div className='text-action'>
                <h4>Take an action today</h4>
                <p>volunteer and help people in need</p>
                <Button>DONATE</Button>
              </div>
            </div>
          </div>
        </div> 
    )
}

export default Home;
