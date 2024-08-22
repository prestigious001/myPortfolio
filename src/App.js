// src/index.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import './App.css';
import NavBar from './Components/Navbars';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Testimonials from './Pages/Testimonials';
import React from 'react';
// import Footer from './Pages/Footer';


function App() {
  return (
   <div> 
   
     <Router> 
       <NavBar/> 
       
       <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/testimonials' element = {<Testimonials/>}/>


      </Routes>
    </Router>
   {/* <Footer/> */}
   </div>
  );
}

export default App;
