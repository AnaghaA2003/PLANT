import React, { useEffect } from 'react';
import './benefits.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'

export default function IndoorBenefit() {
  const navigate = useNavigate()
  const loginRole = JSON.parse(localStorage.getItem('role'))
  const indoor = () => {
    if (loginRole == null) {
      return navigate('/login')
    } else {
      return navigate('/indoor')
    }
  }
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
            <h1 style={{ textAlign: "center", color: "black" }} className='pghome'>
  <b>Why we should be greening <br />our home with <sup>indoor</sup> plants</b>
</h1>
<p style={{ textAlign: "center", fontSize: "16px" }} className='t pghome'>
  Improved Air Quality | Enhanced Mental Health | Aesthetic Appeal | Connection to Nature | Health Benefits
</p>
<br />


<main className="gridhome" >
  <div className="title title--primary">
    <span className="pghome">A little green companion to brighten my day</span>
    <span className="text-bold">Plant</span>
  </div>
  <div className="cover">
    <a
     
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
      src='/img/indoor.jpg'
        className='imghome'
      />
    </a>
  </div>
  <ul className="info" >
    <li>
      <span className="text-bold">Adding a touch of green to my life.</span>
      <span className="t pghome" style={{color:"black"}}><b>Harmony in a pot.</b></span>
    </li>
    <li>
      <span className="text-bold">Feeling grounded with my indoor jungle</span>
      <span className=" pghome" style={{color:"black"}}>Planting a little happiness</span>
    </li>
    <li>
      <span className="text-bold">
        Nature's<sup>little</sup>  miracles.
      </span>
      <span className="pghome" >
      They improve air quality by increasing oxygen levels and reducing indoor pollutants,
      while also helping to regulate humidity through moisture release.
      </span>
      {/* <span className="pghome">
        Performance starts at <strong>7:30 PM</strong>
      </span> */}
    </li>
    {/* <li>
      <span className="pghome">Tickets by Donation</span>
    </li> */}
  </ul>
  <div className="title title--secondary">
    <span className="pghome" >Leaf me alone with my indoor plants</span>
    <span className="text-bold">Plant</span>
  </div>
</main>
<div className="container text-center card">
  <div className="row">
    <div className="col-12 col-md-4 mb-4">
      <img src='/img/webp.jpg' alt="Indoor Plant 1" className='img-fluid col-img' />
    </div>

    <div className="col-12 col-md-4 mb-4">
      <img src='/img/h2.jpg' alt="Indoor Plant 2" className='img-fluid col-img' />
    </div>

    <div className="col-12 col-md-4 mb-4">
      <img src='/img/h3.jpg' alt="Indoor Plant 3" className='img-fluid col-img' />
    </div>
  </div>

  {/* <IndoorBenefit /> */}
  
  
  <br />
  <button type="button" onClick={indoor} className="btn btn-dark mt-3 mx-auto d-block" style={{ width: "200px" }}>
    See More
  </button>
</div>
    </div>
  );
}
