import logo from './image/logo.png';
import img1 from './image/visa.png';
import img2 from './image/mastercard.png';
import img3 from './image/tinkoff.png';
import img4 from './image/applepay.png';
import img5 from './image/googlepay.png';
import { BiLogoFacebook} from 'react-icons/bi';
import { AiOutlineTwitter} from 'react-icons/ai';
import { AiFillInstagram} from 'react-icons/ai';

function Footer(){
    return(
        <div id="footer">
             <div className='row ps-5'>
               <div className='flogo col col-lg-4 col-md-12 col-12 ps-5'>
                  <img src={logo} alt='logo' className='img-fluid' style={{height:'80px',width:'80px'}}/>
               </div>
               <div className='clogo col col-lg-4 col-md-12 col-12 mt-4 ps-5'>
                  <div className='ms-3'><img src={img1} alt='visa'/></div>
                  <div className='ms-3'><img src={img2} alt='visa'/></div>
                  <div className='ms-3'><img src={img3} alt='visa'/></div>
                  <div className='ms-3'><img src={img4} alt='visa'/></div>
                  <div className='ms-3'><img src={img5} alt='visa' style={{width:'40px'}}/></div>
               </div>
               <div className='ficon col col-lg-4 col-md-12 col-12 mt-4 ps-5'>
                <div className='ms-5 ps-5'><BiLogoFacebook style={{color:'white',fontSize:'30px'}}/></div>
                 <div className='ms-4'><AiOutlineTwitter style={{color:'white',fontSize:'30px'}}/></div>
                 <div className='ms-4'><AiFillInstagram style={{color:'white',fontSize:'30px'}}/></div>
               </div> 
            </div>
            
        </div>
    );
}
export default Footer;