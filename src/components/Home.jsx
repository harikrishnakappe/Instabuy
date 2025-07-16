import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import CarouselOne from '../assets/1.png'
import CarouselTwo from '../assets/4.png'
import CarouselThree from '../assets/5.png'
import company1 from '../assets/10.png'
import company2 from '../assets/11.png'
import company3 from '../assets/12.png'
import company4 from '../assets/13.png'
import company5 from '../assets/14.png'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Home({user}){
    const navigate=useNavigate();
    const handleCTAClick=()=>{
        if(user){
            navigate('/products')
        }
        else{
            navigate('/login')
        }
    }
    return(
        <div className='HomeContainer'>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding:150}}><h1 style={{fontWeight:700}}>SHOP WITH UTMOST</h1>
                        <h1 style={{color:'#216ad9',fontWeight:700}}><i>STYLE</i></h1>
                        <h3 style={{marginTop:'20'}}>Shop with latest trendy products</h3>
                        <div><button onClick={handleCTAClick} style={{width:150}}>Browse Products</button></div>
                        <div><h3> Our products are available at</h3>
                        <img src={company1} alt="" style={{height:50}} />
                        <img src={company2} alt=""  style={{height:50}}/>
                        <img src={company3} alt="" style={{height:50}} />
                        <img src={company4} alt="" style={{height:50}} />
                        <img src={company5} alt=""  style={{height:50}}/>
                        </div>
                        
                       
                        </div>
                       

                        </Col>
                       
                        <Col>
                        <img  className="coroselimg"src={CarouselOne}alt=""style={{height:'80vh'}} />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding:150}}><h1 style={{fontWeight:700}}>SHOP WITH UTMOST</h1>
                        <h1 style={{color:'#216ad9',fontWeight:700}}><i>STYLE</i></h1>
                        <h3  style={{marginTop:'20'}}>Shop with latest trendy products</h3>
                        <div><button onClick={handleCTAClick} style={{width:150}}>Browse Products</button></div>
                        <div><h3> Our products are available at</h3>
                        <img src={company1} alt="" style={{height:50}} />
                        <img src={company2} alt="" style={{height:50}} />
                        <img src={company3} alt="" style={{height:50}} />
                        <img src={company4} alt="" style={{height:50}} />
                        <img src={company5} alt="" style={{height:50}} />
                        </div>
                    
                        
                        </div>
                       

                        </Col>
                        
                        <Col>
                        <img  className="coroselimg" src={CarouselTwo} alt=""  style={{height:'80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding:150}}><h1 style={{fontWeight:700}}>SHOP WITH UTMOST</h1>
                        <h1 style={{color:'#216ad9',fontWeight:700}}><i>STYLE</i></h1>
                        <h3  style={{marginTop:'20'}}>Shop with latest trendy products</h3>
                        <div><button onClick={handleCTAClick} style={{width:150}}>Browse Products</button></div>
                        <div><h3> Our products are available at</h3>
                        <img src={company1} alt="" style={{height:50}} />
                        <img src={company2} alt="" style={{height:50}} />
                        <img src={company3} alt=""  style={{height:50}}/>
                        <img src={company4} alt=""  style={{height:50}}/>
                        <img src={company5} alt=""  style={{height:50}}/>
                        </div>
                        </div>
                       

                        </Col>
                        
                        <Col>
                        <img  className="coroselimg"src={CarouselThree} alt=""style={{height:'80vh'}} />
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
            </div>
    )
}