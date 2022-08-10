import React from 'react'
import './post.css'

import getImage from '../../data/images';

function CompletePost({ post, onClose }) {

  return (
    <div className='container'>
      <div className="header">
        <div className='start_head'>
          <span className='category'>Category: {post.category}</span>
          <span className='close_icon' onClick={onClose}>X</span>
        </div>
        <hr></hr>
        <div className="image_content">
          <img src={getImage(post.id, post.category)} alt='Category' />
        </div>
      </div>

      <div className="body">
        <h3>{post.title}</h3>
        <p>
          {post.body}
        </p>
      </div>
      <hr></hr>
      <div style={{ color: 'Orange', fontWeight: 'bolder', paddingLeft: '20px', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', width: '50%', paddingBottom: '1rem' }}>Author: {post.name}</span>
        <span style={{ display: 'inline-block', width: '50%', paddingBottom: '1rem' }}>Email: {post.email}</span>
      </div>
      <div style={{ color: 'Orange', fontWeight: 'bolder', paddingLeft: '20px', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', width: '50%', paddingBottom: '1rem' }}>{post.city}</span>
        <span style={{ display: 'inline-block', width: '50%', paddingBottom: '1rem' }}>{post.country}</span>
      </div>
    </div>
  )
}

export default CompletePost
