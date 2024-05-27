import React from "react";
import cooki from './image/drakcooki.png';
import { useNavigate } from "react-router-dom";

function Homesec(){
  const navigate = useNavigate(); 
  const navigateproduct = () => {
    navigate('/Product');
  };

    return(
      <div className="container-fulid"> 
        <div id="home" >
          <div className="row">
            <div className="col col-lg-5 col-md-12 col-12 ps-5 ">
              <div className="contant  mt-5 pt-5 mb-4 ps-5 text-start">
              <h6 className="display-3 mt-5  pt-3 ps-4 ">FUNCTIONAL</h6>
              <strong className="display-1 mr-5  ps-4 "><a href="sanck" >SANCKS</a></strong>
              <div className="brand  ps-4">
                <h1 className="display-1 mt-2 ">BRAND</h1>
                <p className="ps-5  col-12">newest <br/>healthy <br/>snack</p>
              </div>
              <p className="para ms-4">Unique taste and beneficial for your health! </p>
              <button className="mb-3 mt-4  pt-3 pb-3 ms-4" style={{width:'50%'}} onClick={navigateproduct}>WANT IT!</button>
            </div>
            </div> 
            <div className="cooki col col-lg-7 col-md-7 col-12">
              <img src={cooki} alt="cooki" className="cooky img-fulid"/>
              <img src={cooki} alt="cooki" className="cooky img-fulid animation"/>
              <img src={cooki} alt="cooki" className="cooky img-fulid"/>
              <img src={cooki} alt="cooki" className="cooky img-fulid animation"/>
              <img src={cooki} alt="cooki" className="cooky img-fulid"/>
              <img src={cooki} alt="cooki" className="cooky img-fulid animation"/>
              <img src={cooki} alt="cooki" className="cooky img-fulid"/>
              <img src={cooki} alt="cooki" className="cooky img-fulid animation"/>
              <img src={cooki} alt="cooki" className="cooky img-fulid"/>
              <img src={cooki} alt="cooki" className="cooky img-fulid animation"/>
          
            </div>
        </div> 
     </div> 
    </div>
    );
}
export default Homesec;