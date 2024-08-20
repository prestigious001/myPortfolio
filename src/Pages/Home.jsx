import React from 'react';
import Typewriter from 'typewriter-effect';
import boy from '../assets/boy.jpg';
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa';

export default function Home() {
  return (
   <>
  <div className="container-fluid bg-dark home">
    <div className="row text-light">
      <div className="col-12 col-md-4 col-lg-6 pl-5">

        <p className='welcome'> WELCOME TO MY SPACE,</p>

      

          <h1>  Hi, I'm <span> Abraham Olatunji</span>  </h1>
          <h1> a Full-stack developer skilled in
            
            <Typewriter options={{ strings: [
                '< JavaScript / >',
                 '< React / >',
                '< Laravel / >',
                '< PHP />'
              ],
                autoStart: true, 
                loop: true, delay: 50,
                pauseFor: 1500 }} />
          </h1>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet c
            adipisicing elit. Nulla, nesc e
            a totam ipsam laudantium, 
             qui praesentium, illum nihil  repudiandae 
             veniam. Exercitationem modi tationem mo
             qui praesentium, illum nihil  repudiandae 
             veniam. Exercitationem modi tationem mo
           
          </p>
          <a href="https://github.com/prestigious001/PrestigiousTechHub.git">

             <button className='btn btn-outline-light btn- mr-4'>
              Git Hub 
          </button>
          </a>
         
          
           
            <a href="https://wa.me/9150536370?text=Hi%F0%9F%91%8B%20Abraham%20Olatunji%20!%0ACan%20we%20have%20a%20conversation%20_______%3F%0A">
           <button className='btn btn-primary btn- '>
            Hire Me
               </button>
            </a>
         
          


      </div>
      <div className="col-12 col-md-1"></div>

      <div className="col-6 col-md-4 col-lg-5 ">
      <img src={boy} alt='Logo' style={{width:'25rem',height:'25rem' , borderRadius:'50rem'}} className='mr-2 img'/>
      </div>
      <p className='connect'>CONNECT WITH ME ON SOCIAL MEDIA</p>
              <div className='social-media'>
                <a href="https://www.facebook.com/abraham.olatunji.58?mibextid=ZbWKwL">
                  <FaFacebook size={30} color='#4267B2'/>
                </a>

                <a href="https://x.com/AbrahamOla88481?t=muINOHhDpn7USoC4rTa7BQ&s=09">
                  <FaTwitter size={30} color='#1Da1F2'/>
                </a>

                <a href="https://www.instagram.com/ab.raham3116?utm_source=qr&igsh=YjN5YjBlMDdla2dt">
                  <FaInstagram size={30} color='#C13584'/>
                </a>

                <a href="
                https://www.linkedin.com/in/abraham-olatunji-bb15a6299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                ">
                  <FaLinkedin size={30} color='#0077b5'/>
                </a>

              </div>
    </div>
  
  </div>
  <footer className='bg-dark text-center pt-3 text-secondary'>
   <p className='footer'>© 2024 Abraham Olatunji. All rights reserved. |  abrahamolatunji01@gmail.com</p>

   </footer>
   </>
  )
}
