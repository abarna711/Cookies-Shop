import img1 from './image/hightlights1.jpg';
import img2 from './image/image2.jpg';
import { useNavigate } from "react-router-dom";

function Delivery(){

  const navigate = useNavigate(); 
  const navigateproduct = () => {
    navigate('/details');
  };
  
    return(
    <div className="container-fulid">
      <div id="delivery">
        <div className="row firstrow mt-5 pt-5">
          <div className="col col-lg-6 col-md-6 col-12">
            <img src={img1} alt='cooki' className='image1' style={{height:"100%",width:"120%"}}/>
          </div>
          <div className="col col-lg-6 col-md-6 col-12 ps-5 pt-5 "> 
            <div> 
              <h4 className=''>TASTE</h4>
              <h1 className='display-3'>CHOCOLATE</h1>
            </div>
            <div >
              <p className='mt-4'>For lovers of rich chocolate flavor.<br/>The perfect addition to your favorite coffee.</p>
            </div>
            <div>
            <h2 className='mt-4'>NUTRITION PER SERVING</h2>
            </div>

            <div className='row circul mt-3'>
               <div className='col col-lg-3 col-md-3 col-6  mt-3 text-center pt-4'style={{height:'120px',width:'120px'}}>
                  <h5>PROTIEN</h5>  
                   <h4>12,15</h4>   
               </div>
               <div className='col col-lg-3 col-md-3 col-6 mt-3 text-center pt-4'style={{height:'120px',width:'120px'}}>
                  <h5>FAT</h5> 
                  <h4>12,15</h4>                
               </div>
               <div className='col col-lg-3 col-md-3 col-6 mt-3 text-center pt-4'style={{height:'120px',width:'120px'}}>
               <h5>CARBS</h5> 
                <h4>12,15</h4>     
               </div>
               <div className='col col-lg-3 col-md-3 col-6 mt-3 text-center pt-4'style={{height:'120px',width:'120px'}}>
                 <h5>ENEGRY</h5> 
                  <h4>205,9</h4>     
               </div>
            </div>
            <div className='price mt-3'>
              <div className='price1 me-5 pe-5 '>
                <span className='pricewarp'>PRICE</span><br/>
                <span className='price80'>$80</span>
              </div>
              <div className='price2 '>
                <span className='amount'>AMOUNT</span><br/>
                <span className='amount16'>16</span>
              </div>
            </div>
            <div className='row button mt-4 pt-4 mb-5'>
              <div className='col col-lg-6 col-md-12 col-12'>
                <button className='btn detail me-5 pt-3 pb-3 ' to="/details" style={{width:'200px'}} onClick={navigateproduct}>DETAILS</button>
              </div>
              <div className='col col-lg-6 col-md-12 col-12'>
                <button className='btn add pt-3 pb-3'style={{width:'200px'}} >ADD</button>
              </div>
            </div>
          </div>
        </div>
{/* second row */}
      <div className="row secrow">
          <div className="col col-lg-6 col-md-6 col-12 ps-5 pt-5"> 
            <div> 
              <h4 className='ps-4'>TASTE</h4>
              <h1 className='display-3 ps-4'>ALMOND</h1>
            </div>
            <div >
              <p className='mt-4 ps-4'>Almonds are a good source of nutrients<br/>that are important for brain health..</p>
            </div>
            <div>
            <h2 className='mt-4 ps-4'>NUTRITION PER SERVING</h2>
            </div>

            <div className='row circul mt-3 ms-3'>
               <div className='col col-lg-3 col-md-3 col-6  mt-3 text-center pt-4'style={{height:'120px',width:'120px'}}>
                  <h5>PROTIEN</h5>  
                   <h4>12,15</h4>   
               </div>
               <div className='col col-lg-3 col-md-3 col-6 mt-3 text-center pt-4'style={{height:'120px',width:'120px'}}>
                  <h5>FAT</h5> 
                  <h4>12,15</h4>                
               </div>
               <div className='col col-lg-3 col-md-3 col-6 mt-3 text-center pt-4'style={{height:'120px',width:'120px'}}>
               <h5>CARBS</h5> 
                <h4>12,15</h4>     
               </div>
               <div className='col col-lg-3 col-md-3 col-6 mt-3 text-center pt-4'style={{height:'120px',width:'120px'}}>
                 <h5>ENEGRY</h5> 
                  <h4>205,9</h4>     
               </div>
            </div>
            <div className='price mt-4 ms-4'>
              <div className='price1 me-5 pe-5 '>
                <span className='pricewarp'>PRICE</span><br/>
                <span className='price80'>$80</span>
              </div>
              <div className='price2 '>
                <span className='amount'>AMOUNT</span><br/>
                <span className='amount16'>16</span>
              </div>
            </div>
            <div className='row button mt-3 pt-4 mb-5 ms-2'>
              <div className='col col-lg-6 col-md-12 col-12'>
                <button className='btn detail me-5 pt-3 pb-3 ' style={{width:'200px'}}>DETAILS</button>
              </div>
              <div className='col col-lg-6 col-md-12 col-12'>
                <button className='btn add pt-3 pb-3'style={{width:'200px'}}>ADD</button>
              </div>
            </div>
          </div>
          <div className="col col-lg-6 col-md-12 col-12">
            <img src={img2} alt='cooki' style={{height:"100%",width:"100%"}}/>
          </div>
       </div>

  </div>        
  </div>    
    )
}
export default Delivery;