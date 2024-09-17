import React from 'react'
import '../style/team.css'

const Team = () => {
  return (

    <section className="proprietorDetails">
    <h2>Meet Our Proprietor</h2>

    <div className="proprietorBio">
      <img src="Chirag_shah.jpg" alt="Chirag Shah" className="proprietorImage" /> 

      <div className="proprietorInfo">
        <h3>Mr. Chirag Shah</h3>
        <h4 className='seat'>Proprietor </h4>
        <p>Chirag Shah, with Long Term experience in the logistics industry, founded V. C. Shah & Co with a vision to create a reliable and customer-focused cargo service. His deep knowledge of global logistics and his commitment to operational excellence have driven the success of the company.</p>
        <p>Under Chirag Shah's leadership, V. C. Shah & Co has grown into a trusted name in the industry, known for its innovative solutions and exceptional service standards.</p>
      </div>

    </div>

  </section>

  )
}

export default Team