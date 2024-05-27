import React from "react";
import Homesec from "../pages/Homesec";
import About from "./About";
import Section4 from "./Section4";
import Delivery from "./Delivery";
import Contact from "./Contact";
import Product from "../pages/Product";
// import Demo from "./Demo";

function Home(){

    return(
      <div>
        <Homesec/>
        <About/>
        <Delivery/>
        <Section4/>
        <Product/>
        <Contact/>
         {/* <Demo/> */}
      </div>  
    );
}
export default Home;