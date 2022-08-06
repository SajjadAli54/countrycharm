import React from 'react'
import PostCard from './PostCard'
import './post.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostsList() {
    let description ="Some quick example text to build on the card title and make up thebulk of the card's content."
    return (
        <Container  fluid={true} className="scrollable_div" >
        <Row className="row_style">
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
        

        </Row>
        <Row className="row_style">
        <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
        

        </Row >

        <Row className="row_style">
        <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
          <Col>
              <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
          </Col>
        

        </Row>

      </Container>
       
    )
}

export default PostsList