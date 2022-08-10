import React from 'react'
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './post.css'
import CompletePost from './CompletePost';

import getImage from '../../data/images';


function PostCard({ post }) {

  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  if (isShown)
    return (
      <Card
        id={post.id}
        style={{
          height: '35rem',
          width: '20rem',
          backgroundColor: '#F5F5DA',
          marginTop: '1rem',
          marginBelow: '1rem'
        }}>
        <span
          className='badge'>{`${post.category}`}</span>

        <Card.Body>
          <img
            src={getImage(post.id, post.category)}
            width='100px'
            height={'100px'}
            alt='Post'></img>
          <h5 style={{ marginTop: '1rem', fontSize: '2rem', textAlign: 'center' }}>
            {post.title}
          </h5>
          <Card.Text style={{ height: '10rem' }}>
            {post.body.substring(0, 200)}
          </Card.Text>
          <Card.Link onClick={handleClick} href="//"><hr></hr>Read More</Card.Link>

        </Card.Body>
      </Card>
    )
  else
    return (
      <CompletePost post={post} onClose={handleClick} />
    )
}

export default PostCard

