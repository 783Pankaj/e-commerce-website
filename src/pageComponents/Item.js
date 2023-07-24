import React, { createContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

 const userItem = createContext();
 const Item = () => {
 const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => setUserData(res.data.products))
  }, [])
  const navigate = useNavigate()
  const buy=()=>{
    navigate('/buy')
  }
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center' }}>
        <h1>Item Page</h1>
        <div>
        {
            userData.slice(0, 50).map((item) => {
              const { id, title, description, price, images, rating, discountPercentage } = item;
              return (
                <div key={id}>
                  <h1>Item :{id}</h1>
                  <h2>Title: {title}</h2>
                  <p>Description: {description}</p>
                  <h1>Price: {price}</h1>
                  <h2>Discount: {discountPercentage}%</h2>
                 <h3>Rating: {rating}</h3>
                  <div style={{ width: "30vw", height: 'auto', border: '1px solid black', textAlign: 'center', position: 'static', margin: 'auto', padding: '10px' }}>
                    <Carousel data-bs-theme="dark">
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={images[0]}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={images[2]}
                          alt="Second slide"
                        />
                        <Carousel.Caption>
                          {/* <h5>Here You Cane Buy Clothes</h5>
          <p>Do The Shoping to our website..</p> */}
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={images[3]}
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          {/* <h5>Here You Cane Buy Vegetable</h5>
          <p>Do The Shoping to our website..</p> */}
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>

                  <div style={{margin:'10px'}}>
                     <button type='submit' onClick={buy} style={{margin:'10px', padding:'10px', backgroundColor:'green', borderRadius:'10px'}}>Buy</button>
                     <button style={{margin:'10px', padding:'10px',  backgroundColor:'green', borderRadius:'10px'}}>Add To Cart</button>
                  </div>
                  <hr />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Item
