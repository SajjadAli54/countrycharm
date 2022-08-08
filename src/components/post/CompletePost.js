import React from 'react'
import './post.css'

function CompletePost({ post, onClose }) {
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

  return (
    <div className='container'>
      <div className="header">
        <div className='start_head'>
          <span className='category'>Category: {post.category}</span>
          <span className='close_icon' onClick={onClose}>X</span>
        </div>
        <div className="image_content">

          <img src={img} />
        </div>
      </div>
      <div className="body">
        <h3>{post.title}</h3>
        <p>
          {post.body}
        </p>
      </div>
      <div style={{ backgroundColor: 'rgb(49, 147, 237)', color: 'white', borderRadius: '10px 10px 10px 10px', fontWeight: 'bolder', paddingLeft: '20px' }}>
        <span>Author: {post.name}</span>
        <span>Email: {post.email}</span>

      </div>
    </div>
  )
}

export default CompletePost
