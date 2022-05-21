import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Team from './components/Team';

function About(){
    return(
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
        <Team/>
        </div>
    )

    }

export default About; 
