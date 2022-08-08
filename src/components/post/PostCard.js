import React from 'react'
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './post.css'
import CompletePost from './CompletePost';


function PostCard({ post }) {

  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  let img, cat = post.category;
  switch (cat) {
    case 'Food':
      img = `https://foodish-api.herokuapp.com/images/dosa/dosa${post.id}.jpg`
      break;
    case 'Place':
      img = `https://picsum.photos/200/300`
      break;
    case 'Hotel':
      img = `http://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_00${post.id}.jpg`

  }
  if (isShown)
    return (
      <Card
        id={post.id}
        style={{
          height: '35rem',
          width: '20rem',
          backgroundColor: '#F5F5DA',
          marginTop: '1rem',
          marginTop: '1rem'
        }}>
        <span
          className='badge'>{`${post.category}`}</span>

        <Card.Body>
          <img
            src={img}
            width='100px'
            height={'100px'}
            alt='Post'></img>
          <h5 style={{ marginTop: '1rem', fontSize: '2rem', textAlign: 'center' }}>
            {post.title}
          </h5>
          <Card.Text style={{ height: '10rem' }}>
            {post.body.substring(0, 200)}
          </Card.Text>
          {post.body.length > 200 && <Card.Link onClick={handleClick} href="//"><hr></hr>Read More</Card.Link>}

        </Card.Body>
      </Card>
    )
  else
    return (
      <CompletePost post={post} onClose={handleClick} />
    )
}

export default PostCard

