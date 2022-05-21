import {Carousel } from 'react-bootstrap';
function Team(){
    return(
        <div className='team-container'>
            <div className='border-container'>
                <div className='hr'></div>
                <h2>НАША КОМАНДА</h2>
                <div className='hr'></div>
            </div>
            <div className="slider">
                <Carousel interval={null}>
                    <Carousel.Item>
                    <div className='image-holder'>
                            <img src="images/team-member-1.jpg"></img>
                            <img src="images/team-member-2.jpg"></img>
                            <img src="images/team-member-3.jpg"></img>
                            <img src="images/team-member-4.jpg"></img>
                            <img src="images/team-member-5.jpg"></img>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='image-holder'>
                            <img src="images/team-member-6.jpg"></img>
                            <img src="images/team-member-7.jpg"></img>
                            <img src="images/team-member-1.jpg"></img>
                            <img src="images/team-member-2.jpg"></img>
                            <img src="images/team-member-3.jpg"></img>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='image-holder'>
                            <img src="images/team-member-4.jpg"></img>
                            <img src="images/team-member-5.jpg"></img>
                            <img src="images/team-member-6.jpg"></img>
                            <img src="images/team-member-7.jpg"></img>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
                <div className="slider mini">
                    <Carousel interval= {null}>
                        <Carousel.Item>
                            <div className='image-holder'>
                                <img src="images/team-member-1.jpg"></img>
                                <img src="images/team-member-2.jpg"></img>
                                <img src="images/team-member-3.jpg"></img>
                                <img src="images/team-member-4.jpg"></img>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='image-holder'>
                            <img src="images/team-member-5.jpg"></img>
                            <img src="images/team-member-6.jpg"></img>
                            <img src="images/team-member-7.jpg"></img>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='image-holder'>
                                <img src="images/team-member-7.jpg"></img>
                                <img src="images/team-member-5.jpg"></img>
                                <img src="images/team-member-6.jpg"></img>
                                <img src="images/team-member-7.jpg"></img>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                  <div className="slider-mini-two">
                    <Carousel interval= {null}>
                        <Carousel.Item>
                            <div className='image-holder'>
                                <img src="images/team-member-1.jpg"></img>
                                <img src="images/team-member-2.jpg"></img>
                                <img src="images/team-member-3.jpg"></img>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='image-holder'>
                            <img src="images/team-member-4.jpg"></img>
                            <img src="images/team-member-5.jpg"></img>
                            <img src="images/team-member-6.jpg"></img>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='image-holder'>
                                <img src="images/team-member-7.jpg"></img>
                                <img src="images/team-member-1.jpg"></img>
                                <img src="images/team-member-2.jpg"></img>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='image-holder'>
                                <img src="images/team-member-3.jpg"></img>
                                <img src="images/team-member-4.jpg"></img>
                                <img src="images/team-member-5.jpg"></img>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='image-holder'>
                                <img src="images/team-member-6.jpg"></img>
                                <img src="images/team-member-7.jpg"></img>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
        </div>
)
    }
export default Team;
