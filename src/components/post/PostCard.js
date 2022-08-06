import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import './post.css'


function PostCard(props) {
  return (
    <Card style={{height: '35rem', width: '20rem' ,backgroundColor:'#F5F5DA', marginTop: '1rem', marginTop: '1rem'}}>
        <span className='badge'>{props.postNum}</span>
       
      <Card.Body>
        <img src={props.url_img}></img>
        <h5 style={{marginTop:'1rem',fontSize:'2rem',textAlign:'center'}}>{props.cardname}</h5>
        <Card.Text style={{height:'10rem'}}>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text> 
        <Card.Link  href="#"><hr></hr>Read More</Card.Link>
        
      </Card.Body>
    </Card>
  )
}

export default PostCard

