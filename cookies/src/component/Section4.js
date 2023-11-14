import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import list1 from './image/list1.png';
import list2 from './image/list2.png';
import list3 from './image/list3.png';
import list4 from './image/list4.png';

function Section4(){
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);

    const handleToggle1 = () => {
      setIsExpanded1(!isExpanded1);
    };
    const handleToggle2 = () => {
        setIsExpanded2(!isExpanded2);
      };
      const handleToggle3 = () => {
        setIsExpanded3(!isExpanded3);
      };
      const handleToggle4 = () => {
        setIsExpanded4(!isExpanded4);
      };
return(
    <div id="sec4">
        <div className="container">
            <div className="row mt-5">
                <div className="text1 col col-lg-6 col-md-6 col-12 pt-5">
                 <div className="ms-3">
                   <h1 className="txt1  mt-5 display-2">WHAT ABOUT</h1>
                   <h1 className="txt2 display-2">INGREDIENTS?</h1>
                 </div>     
                </div>
                <div className="text2 col col-lg-6 col-md-6 col-12 pt-5">
                    <p className="mt-5 ps-5 ms-5">High level of plant-based proteins and <br/> healthy fats along with low level of <br/>carbohydrates - our snacks are the<br/> best choice for active people.</p>
                </div>
            </div>
            {/* 1nd box */}

            <div className="box1 row  pt-4 pb-3 text-sm-center text-md-center" onClick={handleToggle1}>
                        <div className="col col-lg-2 col-md-12 col-12 text-sm-center text-md-center ">
                           <p className='num display-6 pt-2'>01</p>
                        </div>
                        <div className="col col-lg-5 col-md-12 col-12 text-sm-center text-md-center">
                            <h1 className='pt-2'>GULTEN FREE OATMEAL</h1>
                        </div>
                        <div className=" col col-lg-3 col-md-12 col-12 text-sm-center text-md-center">
                            <p className='ps-5 para text-sm-center text-md-center'> GREAT SOURCE<br/>OF COMPLEX CARBS</p>
                        </div>
                        <div className="col col-lg-2 col-md-12 col-12 ps-5 text-sm-center text-md-center">
                            <p className='symbol ms-5 text-center pb-5 text-sm-center text-md-center ' style={{width:"45px", height:"10px"}}>{isExpanded1 ? '-' : '+'}</p>
                        </div>
            </div>

                    <Collapse in={isExpanded1}>
                        <div className='collapse row'>
                        <div className="col-lg-6 col-md-12 col-12">
                            <img src={list1} alt='cooki' className='img-fluid'/>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 pt-5'>
                           <p>Gluten-free oat flakes from naked oats contain 1.5 times more * oat oil and natural vitamin E, are rich in vitamins B1, B2, B6, carotene, magnesium and vitamin K.<br/>
                            <br/>We buy oatmeal from a manufacturer with an international certificate confirming the absence of gluten in the product</p>
                            <div className='vitamin pt-4'>
                              <p className='vit1'>
                                <strong className='display-6'>VITAMIN E</strong><br/>
                                <strong className='display-6'>IRON</strong>
                              </p>
                              <p className='ms-5 vit2'>
                                <strong className='display-6'>MAGNUM</strong><br/>
                                <strong className='display-6'>B VITAMINS</strong>
                              </p>
                            </div>
                        </div>
                        </div>
                    </Collapse>
            {/* 2nt box */}

            <div className="box2 row  pt-4 pb-3 text-sm-center text-md-center" onClick={handleToggle2} >
                        <div className="col col-lg-2 col-md-12 col-12 ">
                           <p className='num display-6 pt-2'>02</p>
                        </div>
                        <div className="col col-lg-5 col-md-12 col-12">
                            <h1 className='pt-2'>COCONUT OIL</h1>
                        </div> 
                        <div className=" col col-lg-3 col-md-12 col-12">
                            <p className='ps-5 para'> SOURCE OF<br/>HEALTHY ACIDS</p>
                        </div>
                        <div className="col col-lg-2 col-md-12 col-12 ps-5">
                            <p className='symbol ms-5 text-center pb-5' style={{width:"45px", height:"10px"}}>{isExpanded2 ? '-' : '+'}</p>
                        </div>
            </div>

                    <Collapse in={isExpanded2}>
                        <div className='collapse row'>
                        <div className="col-lg-6 col-md-12 col-12">
                            <img src={list2} alt='cooki' className='mt-5 img-fluid'/>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 pt-5'>
                           <p>Contains fatty acids - MCT medium chain triglycerides. Provides fast but long-lasting energy and is easily absorbed by the body. And they also help breakdown and excretion from the body, is this not a dream?!</p>
                            <div className='vitamin pt-5'>
                              <p className='vit1'>
                                <strong className='display-6'>VITAMIN C</strong><br/>
                                <strong className='display-6'>VITAMIN A</strong>
                              </p>
                              <p className='ms-5 vit2'>
                                <strong className='display-6'>VITAMIN E</strong><br/>
                                <strong className='display-6'>OILS</strong>
                              </p>
                            </div>
                        </div>
                        </div>
                    </Collapse>

              {/* 3rd box */}
              <div className="box3 row  pt-4 pb-3 text-sm-center text-md-center" onClick={handleToggle3}>
                        <div className="col col-lg-2 col-md-12 col-12 ">
                           <p className='num display-6 pt-2'>03</p>
                        </div>
                        <div className="col col-lg-5 col-md-12 col-12">
                            <h1 className='pt-2'>TOPINAMBUR SYRUP</h1>
                        </div>
                        <div className=" col col-lg-3 col-md-12 col-12">
                            <p className='ps-5 para'>HEALTHY REPLACEMENT<br/>OF SUGAR</p>
                        </div>
                        <div className="col col-lg-2 col-md-12 col-12 ps-5">
                            <p className='symbol ms-5 text-center pb-5' style={{width:"45px", height:"10px"}}>{isExpanded3 ? '-' : '+'}</p>
                        </div>
            </div>

                    <Collapse in={isExpanded3}>
                        <div className='collapse row'>
                        <div className="col-lg-6 col-md-12 col-12">
                            <img src={list3} alt='cooki' className='img-fluid mt-5'/>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 pt-5'>
                           <p>Topinambur syrup is a natural low glycemic index sweetener, a source of inulin and pectin. Strengthens the immune system and contains B vitamins, vitamin C, pectin, minerals and organic acids.<br/><br/>We buy from local manufacturers.</p>
                            <div className='vitamin pt-5'>
                              <p className='vit1'>
                                <strong className='display-6'>B VITAMINS</strong><br/>
                                <strong className='display-6'>VITAMIN C</strong>
                              </p>
                              <p className='ms-5 vit2'>
                                <strong className='display-6'>PECTIN</strong><br/>
                                <strong className='display-6'>INULIN</strong>
                              </p>
                            </div>
                        </div>
                        </div>
                    </Collapse>
                  
              {/* 4th box */}
           
              <div className="box4 row  pt-4 pb-3 text-sm-center text-md-center" onClick={handleToggle4}>
                        <div className="col col-lg-2 col-md-12 col-12 ">
                           <p className='num display-6 pt-2'>04</p>
                        </div>
                        <div className="col col-lg-5 col-md-12 col-12">
                            <h1 className='pt-2'>PUMPKIN PROTEIN</h1>
                        </div>
                        <div className=" col col-lg-3 col-md-12 col-12">
                            <p className='ps-5 para'> HELP TO COPE<br/>WITH STRESS</p>
                        </div>
                        <div className="col col-lg-2 col-md-12 col-12 ps-5">
                            <p className='symbol ms-5 text-center pb-5' style={{width:"45px", height:"10px"}}>{isExpanded4 ? '-' : '+'}</p>
                        </div>
            </div>

                    <Collapse in={isExpanded4}>
                        <div className='collapse row'>
                        <div className="col-lg-6 col-md-12 col-12">
                            <img src={list4} alt='cooki' className='mt-5 img-fluid'/>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 pt-5'>
                            <p>Pumpkin Protein is a fat-free, ground pumpkin seed. It is 66% protein and contains 18 amino acids. Thanks to the glutamic acid and tryptophan in the composition, pumpkin protein supports a healthy brain and nervous system and helps to cope with stress.Also contains vitamin E, zinc, magnesium, manganese and phosphorus.</p>
                            <div className='vitamin pt-5'>
                              <p className='vit1'>
                                <strong className='display-6'>VITAMIN E</strong><br/>
                                <strong className='display-6'>MAGNUM</strong>
                              </p>
                              <p className='ms-5 vit2'>
                                <strong className='display-6'>ZINC</strong><br/>
                                <strong className='display-6'>MANGANESE</strong>
                              </p>
                            </div>
                        </div>
                        </div>
                    </Collapse>      


 
        </div>    
    </div>
);
}
export default Section4;