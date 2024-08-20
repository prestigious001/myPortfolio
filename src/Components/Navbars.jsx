import { useState } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import boy from '../assets/boy.jpg';


export default function NavBar() {

  const [menu, setMenu] = useState("");
  return (
    <>
<nav className="navbar navbar-expand-lg top-bar">
  <div className="container-fluid">
    <img src={boy} alt='Logo' style={{width:'50px',height:'50px' , borderRadius:'50px', border:'solid 3px black'}} className='mr-2'/>
    <span className="navbar-brand logo text-light" ><b className='text-primary'>ABRAHAM </b >OLATUNJI</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      </ul>
        <div className="d-flex" >
         <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                      
                  
        <li className="nav-item top-item" onClick={() => {setMenu("home")}}>
        <Link to="/" className="nav-link active text-light" aria-current="page">
        Home {menu === 'home'?<hr/>:<></>}
        </Link>
        
        </li>

        <li className="nav-item" onClick={() => {setMenu("contact")}}>
        <Link to="/contact" className="nav-link active text-light" aria-current="page">
       Contact {menu === 'contact'?<hr/>:<></>}
        </Link>
        
        </li>
        <li className="nav-item" onClick={() => {setMenu("projects")}}>
        <Link to="/projects" className="nav-link active text-light" aria-current="page">
        Projects{menu === 'projects'?<hr/>:<></>}
        </Link>
        </li>

        <li className="nav-item" onClick={() => {setMenu("blog")}}>
        <Link to="/blog" className="nav-link active text-light" aria-current="page">
         Testmonials {menu === 'blog'?<hr/>:<></>}
        </Link>
        </li>

        <li className="nav-item" onClick={() => {setMenu("test")}}>
        <Link to="/testimonials" className="nav-link active text-light" aria-current="page">
        Blog  {menu === 'test'?<hr/>:<></>}
        </Link>
        </li>

        <li className="nav-item" onClick={() => {setMenu("upcoming")}}>
        <Link to="/upcoming" className="nav-link active text-light" aria-current="page">
        Hobbies {menu === 'upcoming'?<hr/>:<></>}
        </Link>
        </li>
         </ul>
        
        </div>
    </div>
    
  </div>
  
</nav>

</>
  )
}
