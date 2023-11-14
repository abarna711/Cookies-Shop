import React from "react";
import Menubar from "../pages/Menubar";
import { Outlet } from "react-router-dom";
function Rootlayout(){
    return(
        <>
        <Menubar/>
        {/* <Demo/> */}
        <Outlet/>
        </>
    );

}
export default Rootlayout;