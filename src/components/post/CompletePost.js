import React from 'react'
import './post.css'

function CompletePost({ post, onClose }) {
  return (
    <div className='container'>
      <div className="header">
        <div className='start_head'>
          <span className='category'>Category: {post.category}</span>
          <span className='close_icon' onClick={onClose}>X</span>
        </div>
        <div className="image_content">

          <img src={`https://robohash.org/${post.id}?20x20`} />
        </div>
      </div>
      <div className="body">
        <h3>post.title</h3>
        <p>
          {post.body}
        </p>
      </div>
      <div style={{ backgroundColor: 'rgb(49, 147, 237)', color: 'white', borderRadius: '10px 10px 10px 10px', fontWeight: 'bolder', paddingLeft: '20px' }}>
        <span>Author: {post.author}</span>
        <span>Email: {post.email}</span>

      </div>
    </div>
  )
}

export default CompletePost
