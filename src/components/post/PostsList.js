import React from 'react'
import PostCard from './PostCard'
import './post.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostsList({ posts }) {
    return (
        <Container fluid={true} lg="auto" className="scrollable_div" >
            <Row className="row_style">
                {
                    posts.map(post => {
                        return (
                            <Col key={post.id} md={6} lg="auto">
                                <PostCard post={post} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default PostsList