import React, { useEffect, useState } from 'react'
import './shopMore.css'
import NavBar from '../components/Nav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'
import toast,{Toaster} from 'react-hot-toast'

export default function ShopMore() {
  const [more, setMore] = useState([])

  const { id } = useParams()
  const cartProduct = (id) => {
    const data = {
      user_login_id: JSON.parse(localStorage.getItem('loginId')),
      product_Id: id
    }
    axios.post(`http://localhost:5000/api/cart/add_to_cart/`, data).then((res) => {
      console.log(res.data.message);
      toast.success(res.data.message)


    }).catch((error) => {
      console.log(error);
      // toast.error()


    })
  }
  console.log("id==>", id);
  useEffect(() => {
    // const shop_login_id = JSON.parse(localStorage.getItem('loginId'));
    const token=localStorage.getItem('token');
    try {
      axios.get(`http://localhost:5000/api/shop/shopAdd-productView/${id}`).then((res) => {
        console.log("res==>", res.data.data);
        setMore(res.data.data)

      }).catch((error) => {
        console.log(error);

      })
    } catch (error) {
      console.log(error);

    }
  }, [id])

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
      <NavBar /><br></br>
      <Toaster/>
      {/* <img src='/img/shopMore2.jpg' height={"500px"} width={"1400px"}></img> */}
      
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif", fontWeight: "bold" }}>OUR PRODUCTS</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div className='image-card' style={{display:"flex",justifyContent:"space-between",gap:"20px",flexWrap:'wrap'}}>
          {more.map((value, index) => (
            <div className=" shop-card">
              <img src={value.product_img}></img>
              <div className="card__content">
                <p className="card__title">{value.productName}</p>
                <p className="card__title">{value.category}</p>

                <p className="card__description">
                {value.description}
                </p><br></br>
               
                <i class="fa-solid fa-cart-shopping" onClick={() => {
                        cartProduct(value._id)
                      }}></i>
              


                <p style={{ color: "rgb(122, 35, 35)", textAlign: "center", display: "flex", justifyContent: "space-evenly" }}>
                  <div><i class="fa-solid fa-indian-rupee-sign"></i>{value.price}</div>
                  <div> {value.quantity}</div>
                </p>
                <br></br><br></br><br></br>

              </div>
            </div>
          ))}

        </div>
        {/* <div className='image-card'>

                <div className=" shop-card">
                  <img src='/img/outdoor-2.jpg'></img>
                  <div className="card__content">
                    <p className="card__title">plant</p>

                    <p className="card__description">
                     good
                    </p><br></br>
                  

                    <p style={{ color: "rgb(122, 35, 35)", textAlign: "center", display: "flex", justifyContent: "space-evenly" }}>
                      <div><i class="fa-solid fa-indian-rupee-sign"></i>100</div>
                      <div> 2</div>
                    </p>
                    <br></br><br></br><br></br>
                    
                  </div>
                </div>
              </div> */}
        {/* <div className='image-card'>

                <div className=" shop-card">
                  <img src='/img/outdoor-2.jpg'></img>
                  <div className="card__content">
                    <p className="card__title">plant</p>

                    <p className="card__description">
                     good
                    </p><br></br>
                  

                    <p style={{ color: "rgb(122, 35, 35)", textAlign: "center", display: "flex", justifyContent: "space-evenly" }}>
                      <div><i class="fa-solid fa-indian-rupee-sign"></i>100</div>
                      <div> 2</div>
                    </p>
                    <br></br><br></br><br></br>
                    
                  </div>
                </div>
              </div> */}
        {/* <div className='image-card'>

                <div className=" shop-card">
                  <img src='/img/outdoor-2.jpg'></img>
                  <div className="card__content">
                    <p className="card__title">plant</p>

                    <p className="card__description">
                     good
                    </p><br></br>
                  

                    <p style={{ color: "rgb(122, 35, 35)", textAlign: "center", display: "flex", justifyContent: "space-evenly" }}>
                      <div><i class="fa-solid fa-indian-rupee-sign"></i>100</div>
                      <div> 2</div>
                    </p>
                    <br></br><br></br><br></br>
                    
                  </div>
                </div>
              </div> */}
        {/* <div className='image-card'>

                <div className=" shop-card">
                  <img src='/img/outdoor-2.jpg'></img>
                  <div className="card__content">
                    <p className="card__title">plant</p>

                    <p className="card__description">
                     good
                    </p><br></br>
                  

                    <p style={{ color: "rgb(122, 35, 35)", textAlign: "center", display: "flex", justifyContent: "space-evenly" }}>
                      <div><i class="fa-solid fa-indian-rupee-sign"></i>100</div>
                      <div> 2</div>
                    </p>
                    <br></br><br></br><br></br>
                    
                  </div>
                </div>
              </div> */}
        {/* <div className='image-card'>

                <div className=" shop-card">
                  <img src='/img/outdoor-2.jpg'></img>
                  <div className="card__content">
                    <p className="card__title">plant</p>

                    <p className="card__description">
                     good
                    </p><br></br>
                  

                    <p style={{ color: "rgb(122, 35, 35)", textAlign: "center", display: "flex", justifyContent: "space-evenly" }}>
                      <div><i class="fa-solid fa-indian-rupee-sign"></i>100</div>
                      <div> 2</div>
                    </p>
                    <br></br><br></br><br></br>
                    
                  </div>
                </div>
              </div> */}

      </div>
      <br></br>
      <Footer/>
    </div>
  )
}
