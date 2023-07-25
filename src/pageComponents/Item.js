import React, { createContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import '../Styles/item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Buy from './Buy';

const userItem = createContext();
const Item = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => setUserData(res.data.products))
  }, [])
  const navigate = useNavigate()
  const buy = () => {
    navigate('/buy')
  }
  return (
    <div>
      <Navbar />
        <h1>Item Page</h1>
        <div className='cards'>
          {
            userData.slice(0, 20).map((item) => {
              const { id, title, description, price, images, rating, discountPercentage } = item;
              return (
                <div cards_item>
                  <Card 
                   
                   style={{ width: '20rem', height: 'auto', padding: '10px', margin: '10px' , position:'static'}}>
                    <Carousel data-bs-theme="dark" style={{width:'auto' , height:'25rem'}}>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={images[0]}
                          alt="First slide"
                        />
                      </Carousel.Item>

                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={images[3]}
                          alt="Third slide"
                        />
                      </Carousel.Item>

                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={images[2]}
                          alt="Second slide"
                        />
                      </Carousel.Item>
                      {/* <Card.Img variant="top" src={images[0]} /> */}
                    </Carousel>
                    <Card.Body style={{width:'auto' , height:'25rem'}} className='card_content'>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                        {description}
                      </Card.Text>
                      <h3>Price: {price}</h3>
                      <h4>Discount: {discountPercentage}%</h4>
                      <h5>Rating: {rating}</h5>
                      <Button type='submit' onClick={buy} className='btn card_btn'>Buy</Button>
                      <Button className='btn card_btn'>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default Item
