// import React, { useEffect, useState } from 'react'
import React from 'react';
import Navbar from '../components/Navbar'
// import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/home.css';

const Home = () => {
    //  const [productData, setProductData] = useState([]);
    //  const [isError, setIsError] = useState("");

    //  useEffect(()=>{
    //   axios.get("https://dummyjson.com/products").then((res)=>console.log(res)).then((res)=>setProductData(res.data))
    //   .catch((err)=>setIsError(err.message))
    //  },[])
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> Welcome ! To Shoping web</h3>
          </div>
        </div>
      </div>

      <div className='slider'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="mobile.jpg/800x400?text=First slide&bg=f5f5f5"
          src={require("../Images/mobile.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Here You Cane Buy Mobile</h5>
          <p>Do The Shoping to our website..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../Images/clothes.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>Here You Cane Buy Clothes</h5>
          <p>Do The Shoping to our website..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../Images/vegitable.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5>Here You Cane Buy Vegetable</h5>
          <p>Do The Shoping to our website..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    <div>
     
    </div>
    </>
  )
}

export default Home
