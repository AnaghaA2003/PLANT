import React, { useEffect, useRef } from 'react'
import Nav from '../components/Nav'

import './homepage.css'

import 'react-awesome-slider/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";
import AOS from 'aos'


export default function Home() {
  const scrollTargetRef = useRef(null);

  const navigate = useNavigate()
  const loginRole = JSON.parse(localStorage.getItem('role'))
  const indoor = () => {
    if (loginRole == null) {
      return navigate('/login')
    } else {
      return navigate('/indoor')
    }
  }
  const outdoor = () => {
    if (loginRole == null) {
      return navigate('/login')
    } else {
      return navigate('/outdoor')
    }
  }
  const down = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <title>plant</title>

      <div className='home'>
        <Nav />

        <div className='bgnav'>
          <h1 className='navhead'  data-aos="zoom-in">Let's Bloom<br></br> Together</h1><br />
          <h5 className='navhead2' data-aos="fade-up-right">ENJOY THE MAGIC OF YOUR GARDEN</h5><br />
          <p className='navp' data-aos="fade-up-left">"Whether indoors or outdoors, plants inspire us to grow in every environment,<br /> adapting to the light that nourishes us,<br /> and reminding us that growth is a process, not a destination."</p><br></br>

          <span className='iconhpg'>
            <i class="fa-solid fa-angles-down fa-fade" style={{ color: "green" }} onClick={down}></i>

          </span>
        </div>




      </div><br></br>

      {/* //indoor// */}


      <h1 style={{ textAlign: "center", color: "black" }} className='pghome' ref={scrollTargetRef} data-aos="fade-up-right">
        <b>Why we should be greening <br />our home with <sup>indoor</sup> plants</b>
      </h1>
      <p style={{ textAlign: "center", fontSize: "16px", margin: "10px" }} className='t pghome'>
        Improved Air Quality | Enhanced Mental Health | Aesthetic Appeal | Connection to Nature | Health Benefits
      </p>
      <br />


      <main className="gridhome"  >
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
        <ul className="info" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <li>
            <span className="text-bold">Adding a touch of green to my life.</span>
            <span className="t pghome" style={{ color: "black" }}><b>Harmony in a pot.</b></span>
          </li>
          <li>
            <span className="text-bold">Feeling grounded with my indoor jungle</span>
            <span className=" pghome" style={{ color: "black" }}>Planting a little happiness</span>
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
      <div className="container text-center card" >
        <div className="row" >
          <div className="col-12 col-md-4 mb-4" data-aos="fade-down-left">
            <img src='/img/webp.jpg' alt="Indoor Plant 1" className='img-fluid col-img' />
          </div>

          <div className="col-12 col-md-4 mb-4" data-aos="fade-up" >
            <img src='/img/h2.jpg' alt="Indoor Plant 2" className='img-fluid col-img' />
          </div>

          <div className="col-12 col-md-4 mb-4" data-aos="fade-down-right">
            <img src='/img/h3.jpg' alt="Indoor Plant 3" className='img-fluid col-img' />
          </div>
        </div>

        {/* <IndoorBenefit /> */}


        <br />
        <button type="button" onClick={indoor} className="btn btn-dark mt-3 mx-auto d-block" style={{ width: "200px" }}>
          See More
        </button>
      </div>





      <br></br><br></br><br></br>
      {/* //outdoor// */}




      <h1 style={{ textAlign: "center", color: "black" }} className='col-head pghome' data-aos="fade-up-right">
        <b>Why we should be greening <br />our home with <sup>Outdoor</sup> plants</b>
      </h1>
      <p style={{ textAlign: "center", fontSize: "16px", margin: "10px" }} >
        Improved Air Quality | Supports Local Wildlife | Aesthetic Appeal | Environmental Benefits | Physical Health Benefits
      </p>
      <br />

      <div className='body'>

        <div className="hero" />
        <div className="header">OUTDOOR PLANTS</div>
        <div className="content">
          <div className="heading">
            {/* <h3>By Andy Pane</h3> */}
            <p>
              Keeping outdoor plants offers numerous benefits.

            </p>
          </div>
        </div>
        <div className="small-img small1" />
        <div className="small-img small2" />
        <div className="small-img small3" />
        <div className="readmore">
          <img
            src="/img/outooor.jpg"
            alt=""
          />
        </div>
        <div className="social">
          <img
            src="/img/outdoorplant.jpg"
            alt=""
          />
          <img
            src="img/outdoorplant1.jpg"
            alt=""
          />
          <img
            src="img/flowers.jpg"
            alt=""
          />
        </div>
      </div>



      <div className="container text-center card" >
        <div className="row">
          <div className="col-12 col-md-4 mb-4" data-aos="fade-down-left">
            <img src='/img/outdoor home.jpg' alt="Outdoor Plant 1" className='img-fluid col-img' />
          </div>

          <div className="col-12 col-md-4 mb-4"  data-aos="fade-up">
            <img src='/img/outdoor-3.jpg' alt="Outdoor Plant 2" className='img-fluid col-img' />
          </div>

          <div className="col-12 col-md-4 mb-4" data-aos="fade-down-right">
            <img src='/img/outdoor home2.jpg' alt="Outdoor Plant 3" className='img-fluid col-img' />
          </div>
        </div>

        {/* <OutdoorBenefits /> */}


        <br />
        <button type="button" onClick={outdoor} className="btn btn-dark mt-3 mx-auto d-block" style={{ width: "200px" }}>
          See More
        </button>
      </div>
      <br />












      <Footer />

    </div>
  )
}
