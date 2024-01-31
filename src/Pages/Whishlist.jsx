import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWhishlist } from '../Reduxx/slice/whishlistSlice'
import { addToCart } from '../Reduxx/slice/cartSlice'

function Whishlist() {
  const whishlistArray=useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWhishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWhishlist(product.id))
  }
  return (
    <Row>
      {
        whishlistArray.length>0?
        whishlistArray.map((products,index)=>(
          <Col key={index} className='mb-5 mt-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded ' style={{width:'19rem',height:'30rem'}}>
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
          <button className='btn btn-light'onClick={()=>handleWhishlistCart(products)}><i class="fa-solid fa-cart-shopping text-warning"></i></button>
          <button onClick={()=>dispatch(removeFromWhishlist(products.id))} className='btn btn-light' > <i class="fa-solid text-danger fa-trash"> </i></button>
          </div>
        </Card.Body>
      </Card>
          </Col>
          )):<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'500px'} width={'500px'} src='https://limasy.com/img/empty-animation1.gif' alt=''/> 
            <h3 className='text-center text-danger'>Wishlist is Empty!! </h3>
            <Link style={{textDecoration:"none"}} className='btn btn-warning rounded' to={'/'}>Back to Home </Link>
          </div>
    }
        </Row>
      )
    }

    

export default Whishlist