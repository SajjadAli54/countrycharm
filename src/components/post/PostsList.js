import React from 'react'
import PostCard from './PostCard'
import './post.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostsList({ array }) {
    let description = "Some quick example text to build on the card title and make up thebulk of the card's content."
    return (<Container fluid={true} lg="auto" className="scrollable_div">
        <Row className="row_style">
            {
                array.map(element => <Col key={element.id} md={6} lg="auto">
                    <PostCard post={element} />
                </Col>)
            }
        </Row>
    </Container>

        //     <Container  fluid={true} lg="auto" className="scrollable_div" >
        //     <Row className="row_style">
        //       <Col md={6} lg="auto">
        //           <PostCard postNum="1" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>
        //       <Col  md={6} lg="auto">
        //           <PostCard postNum="2" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>
        //       <Col  md={6} lg="auto">
        //           <PostCard postNum="3" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col >
        //       <Col  md={6} lg="auto">
        //           <PostCard  postNum="4" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>


        //     </Row>
        //     <Row className="row_style">
        //     <Col md={6} lg="auto">
        //           <PostCard postNum="5" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>
        //       <Col md={6} lg="auto">
        //           <PostCard postNum="6" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>
        //       <Col md={6} lg="auto">
        //           <PostCard postNum="7" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>
        //       <Col md={6} lg="auto">
        //           <PostCard postNum="8" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>


        //     </Row >

        //     {/* <Row className="row_style">
        //     <Col md={6} lg="auto">
        //           <PostCard postNum="9" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>
        //       <Col md={6} lg="auto">
        //           <PostCard postNum="10" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>
        //       <Col md={6} lg="auto">
        //           <PostCard postNum="11" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>
        //       <Col md={6} lg="auto">
        //           <PostCard postNum="12" cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        //       </Col>


        //     </Row>  */}

        //   </Container>

    )
}

export default PostsList