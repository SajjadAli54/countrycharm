import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './post.css'
import CompletePost from './CompletePost';


function PostCard({ post }) {

  function readMore() {
    return <CompletePost post={post} />
  }
  return (
    <Card style={{ height: '35rem', width: '20rem', backgroundColor: '#F5F5DA', marginTop: '1rem', marginTop: '1rem' }}>
      <span className='badge'>{post.id}</span>

      <Card.Body>
        <img src={`https://robohash.org/${post.id}?20x20`} width='100px' height={'100px'} alt='Robot'></img>
        <h5 style={{ marginTop: '1rem', fontSize: '2rem', textAlign: 'center' }}>{post.title}</h5>
        <Card.Text style={{ height: '10rem' }}>
          {post.body.substring(0, 200)}
        </Card.Text>
        {post.body.length > 200 && <Card.Link onClick={readMore} href="//"><hr></hr>Read More</Card.Link>}

      </Card.Body>
    </Card>
  )
}

export default PostCard

