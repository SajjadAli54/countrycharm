import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PostCard(props) {
  return (
    <Card style={{ width: '18rem' ,backgroundColor:'#F5F5DA'}}>
        
      <Card.Body>
        <img src={props.url_img}></img>
        <h5>{props.cardname}</h5>
                 <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text> 
        <Card.Link href="#">Read More</Card.Link>
        
      </Card.Body>
    </Card>
  )
}

export default PostCard

