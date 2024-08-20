import React from 'react';
import { FaFacebook,FaTwitter,FaLinkedin,FaEnvelope,FaWhatsapp} from 'react-icons/fa';
import boy from '../assets/boy.jpg';



export default function Contact() {
  return (
    <>
    <div className="container-fluid bg-dark home">
    <div className="row text-light">
      <div className=" col-md-1"></div>

      <div className="col-6 col-md-4 col-lg-5 pl-5 con-img " style={{marginBottom:'5.3rem'}}>

            <img src={boy} alt='Logo' style={{width:'25rem',height:'25rem' , borderRadius:'50rem 50rem 0 50rem'}} className='con-img'/>


      </div>
      <div className=" col-md-1"></div>


      <div className="col-6 col-md-4 col-lg-5 con-det ">

                <p className='welcome'> CONTACT ME VIA EMAIL:</p>

            <p className='emailtag'>
             <a href="https://abrahamolatunji@gmail.com"><FaEnvelope/>
             <strong className=''> </strong> <span className='email'> abrahamolatunji01@gmail.com</span>

            </a>
            </p>

            <p className='con-me'>CONTACT ME VIA SOCIAL MEDIA:</p>
              <div className='con-social-media'>
                <a href="https://www.facebook.com/abraham.olatunji.58?mibextid=ZbWKwL">
                  <FaFacebook size={30} color='#4267B2'/>
                </a>

                <a href="https://x.com/AbrahamOla88481?t=muINOHhDpn7USoC4rTa7BQ&s=09">
                  <FaTwitter size={30} color='#1Da1F2'/>
                </a>

                {/* <a href="http://">
                  <FaInstagram size={30} color='#C13584'/>
                </a> */}

                <a href="
                https://www.linkedin.com/in/abraham-olatunji-bb15a6299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                
                ">
                  <FaLinkedin size={30} color='#0077b5'/>
                </a>

              </div>
         <br />
              <p className='con-me'>WANT A QUICK CHAT:</p>

            
            <a href="https://wa.me/9150536370?text=Hi%F0%9F%91%8B%20Abraham%20Olatunji%20!%0ACan%20we%20have%20a%20conversation%20_______%3F%0A">
            <button className='btn btn-success '>
           <FaWhatsapp/> Whatsapp
                </button>
            </a>


      </div>
    
    </div>
  
  </div>
  <footer className='bg-dark text-center pt-3 text-secondary'>
   <p className='footer'>© 2024 Abraham Olatunji. All rights reserved.</p>

   </footer>
    </>
  )
}
