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
           {/* <div className="wave-container">
              <div className="wave">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12635 852" fill="none">
                  <path d="M1488.94 101.957C980.637 -45.6519 284.521 40.4531 0 101.957V852H12635V70.4548C12393.6 115.791 11719.3 179.261 10953.5 70.4548C9996.13 -65.553 9903.74 248.965 9066.53 101.957C8229.31 -45.0517 8108.18 -11.7656 7371.48 70.4548C6717 143.5 6255 11.9509 5994.13 11.9514C5548.5 11.9514 4791.5 206 4355.23 101.957C3933.12 1.28993 3260.26 -0.215927 2955.13 70.4548C2678.19 142.459 1997.24 249.565 1488.94 101.957Z">
                  </path>
                </svg>
              </div> 
          </div> */}
        </div> 
     </div> 
    </div>
    );
}
export default Homesec;