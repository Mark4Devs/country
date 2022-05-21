import { Carousel, Button} from 'react-bootstrap';
import ukrLang from '../db.json';
import enLang from '../db.json';

function Home() {
     const ukrItem = ukrLang.ukrLang;
     const enItem = ukrLang.enLang;
     const [langActive, setLang] = useState(false);
    const toggleLang = () => {
        setLang(true);
      };
      const toggleLangNext = () => {
        setLang(false);
      };
    return (
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
    )
}

export default Home;
