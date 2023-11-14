import React from "react";
import img from './image/image1.png'
function About(){
    return(
        <div className="container">
            <div id="about">
                <div className="row firstrow">
                    <div className="col col-lg-7 col-md-7 col-12  pt-5 mt-5 ">
                        <h1 className="display-2  mt-5">WHAT DOSE IT</h1>
                        <h1 className="display-2 ">MEAN FUNCTIONAL</h1>
                        <h1 className="display-2 ps-2 pe-2">SANCKS?</h1>
                    </div>
                    <div className="col col-lg-5 col-md-5 col-12 col-12 pt-5 ps-3 pe-3 mt-5">
                        <p className=" mt-5 ms-5 me-3">
                        Snacks that not only give you a unique taste, but also benefit the body because of natural ingredients. Great source of natural vitamins and minerals.
                        </p>
                    </div>
                </div>
                <div className="row secrow">
                    <div className="col col-lg-5 col-md-5 col-12  pt-5 ">
                        <div className="mt-5 ">
                        <strong >FUNCTIONAL SANCKS WITH</strong><br/>
                        <strong >WELL-BALANCED INGREDIENTS</strong>
                        </div>
                        
                        <p className="  pe-5 mt-4">High level of plant-based proteins and healthy fats along with low level of carbohydrates - our snacks are the best choice for active people.</p>
                        <button className="btn  mt-4 mb-5 ps-5 pe-5 pt-3 pb-3">WANT IT !</button>
                    </div>  
                    <div className="col col-lg-7 col-md-7 col-12  ">
                        <img src={img} alt="cooki" className="img-fluid mt-5 ms-3"/>
                    </div>  

                </div>
            </div> 

        </div>
    );
}
export default About;