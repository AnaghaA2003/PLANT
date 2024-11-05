import React, { useEffect } from 'react'
import './care.css'
import AOS from 'aos'


export default function CareTips() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
       <div className="container text-center">
        <div className="row align-items-start">
          <div className="col ">
            <img className='colImg' src="/img/plant care.jpeg" alt="" height="200%"  />
          </div>
    
    <div className="col colCare"
     data-aos-anchor-placement="center-center">
            <h3 style={{ color: "rgb(114, 151, 59)" }}>
              <b>
                <i>CARE TIPS</i>
              </b>
            </h3>
            <ul className='careUl'> 
              <li  data-aos="fade-up">
                After recieveing the plants open the box 📦 as soon as possible .
              </li>
              <br />
              <li  data-aos="fade-up">⁠Air dry the plants for 2-3 hours on fresh air .</li>
              <br />
              <li  data-aos="fade-up">
                Plant in well drained soil . ( 30%sand + 30% soil + 20% vermicompost
                + 20% perlite ) .
              </li>
              <br />
              <li  data-aos="fade-up">
                {" "}
                ⁠Water plants after 2-3 days and don’t give direct sunlight to newly
                planted succulents for at least 10 days .
              </li>
              <br />
              <p  data-aos="fade-up">
                <b>Notes:</b>Always water succulents when top layer of soil feels
                dry in roots of plant rather than leaves .
              </p>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
