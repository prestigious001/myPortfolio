// src/index.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import './App.css';
import NavBar from './Components/Navbars';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

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

      </Routes>
    </Router>
   {/* <Footer/> */}
   </div>
  );
}

export default App;

// import './App.css';
// import React from 'react';
// import NavBar from './Component/NavBar';
// import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Blog from './Pages/Blog';
// import Footer from './Pages/Footer';
// import Testimonials from './Pages/Testimonials';
// import GetStarted from './Pages/GetStarted';



// export default function App() {
  
//   return (
//     <>
   
//      <Router>
//       <NavBar />
//       <Routes>
//         <Route path='/' element = {<Home/>}/>
//         <Route path='/about' element = {<About/>}/>
//         <Route path='/blog' element = {<Blog/>}/>
//         <Route path='/contact' element = {<Contact/>}/>
//         < Route path='/testimonials' element= {<Testimonials/>}/>
//         < Route path='/getstarted' element = {<GetStarted/>} />

//       </Routes> 
//      </Router>
    
//      <Footer/>
//     </>
//   )
// }








