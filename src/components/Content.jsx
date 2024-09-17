import React from 'react'
import '../style/content.css'

const Content = () => {
  return (
   <div className='Content'>


    <div className="ContentText">

        <div className="heading">
        <h1>We ensure total satisfaction of </h1>
        <h2>Our customer with total Marin solution</h2>
        </div>

        <div className="history">
        <h2>V.C Shah& Co.,a leading Freight Forwarder & Logistics Provider and A.M.Soddar & Co., a Registred customs Broker (Our Associated Unit) based at Pipavav Port (APM Terminals-West-Coast,India) was flagged off in 2011 by Mr. Chirag Shah , an entrepreneur with long term experience in the respective fields.</h2>
        </div>

            <div className="contentImg">
                <img src="img1.jpg" alt="" />
                <img src="img4.jpg" alt="" />
                <img src="img3.jpg" alt="" />
                <img src="img2.jpg" alt="" />
                <img src="img5.jpg" alt="" />
            </div>
    </div>
            <div className="ContentBelow">
            Clearing | Forwarding | Port Agents 
            </div>
   </div> 
   
  )
}

export default Content