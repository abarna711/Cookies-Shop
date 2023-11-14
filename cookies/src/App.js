import React from 'react';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import About from './component/About';
import Section4 from './component/Section4';
import Delivery from './component/Ingredient';
import Contact from './component/Contact';
import Homesec from './pages/Homesec';
import Cart from './component/Cart';
import Product from './pages/Product';
import Details from'./pages/Details'

function App() {

  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Rootlayout/>}>
              <Route index element={<Home/>} />
              <Route path='home' element={<Homesec/>} />
              <Route path='about' element={<About/>} />
              <Route path='ingredient' element={<Section4/>} />
              <Route path='delivery' element={<Delivery/>} />
              <Route path='product' element={<Product/>} />
              <Route path='cart' element={<Cart/>} />

              <Route path='contact' element={<Contact/>} />
              <Route path="details" element={<Details/>}/>

            </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;