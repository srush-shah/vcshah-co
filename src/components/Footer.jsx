import React from 'react'
import '../style/footer.css'



const Footer = () => {
  return (
    <div className='footer'>

            <div className="footerDetail">

                <div className="footerLogo">

                       <div className="logoimg">
                       <img src="VCS_LOGO2.png" alt="" />
                        </div>

                        <h1> V. C. Shah & Co.</h1>
                        <h3>  -----Total Marin Solutions----- </h3>
                 </div>  

                  <div className="contact">
                   <p> For more information please contact: </p>
                   <p>C-11,Container Office, B/h.Customs House,Pipavav Port,</p> 
                   <p>Tal:Rajula - 36 55 60 Dist : Amereli Gujarat.</p> 
                   <p> Tel : 02794 - 286 023 • Mob : 93772 11223</p> 
                   <li> Email : chiragshah1612@yahoo.com • Skype : chiragshah1612</li> 
                  </div>

            </div>


    </div>
  )
}

export default Footer;