import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../redux/useFetch';
import { useDispatch } from 'react-redux';
import { addToWhishlist } from '../Reduxx/slice/whishlistSlice';
import { addToCart } from '../Reduxx/slice/cartSlice';
function Home() {
 const data = useFetch("https://dummyjson.com/products")
 console.log(data);
 const dispatch=useDispatch()
  return (
    <Row className='ms-5' style={{marginTop:'100px'}}>
      {
        data?.length>0.?data?.map((products,index)=>(
      <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded ' style={{width:'18rem',height:'30rem'}}>
    <Card.Img height={"200px"}  variant="top" src={products.thumbnail}/>
    <Card.Body>
      <Card.Title>{products.title}</Card.Title>
      <Card.Text>
       <p> {products.description.slice(0,55)}...</p>
      </Card.Text> 
      <Card.Text>
       $ {products.price}
      </Card.Text> 
      <div className='d-flex justify-content-between'>
      <button className='btn btn-light' onClick={()=>dispatch(addToCart(products))}><i class="fa-solid fa-cart-shopping text-warning"></i></button>
      <button className='btn btn-light' onClick={()=>dispatch(addToWhishlist(products))}><i class="fa-solid text-danger fa-heart"></i></button>
      </div>
    </Card.Body>
  </Card>
      </Col>
      )):<p className='text-danger fs-4 fw-bolder'>Nothing to display</p>
}
    </Row>
  )
}

export default Home