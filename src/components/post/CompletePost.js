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
        <hr></hr>
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
<<<<<<< HEAD
      <hr></hr>
      <div style={{ color: 'Orange',  fontWeight:'bolder',paddingLeft:'20px', textAlign: 'center' }}>
        <span style={{display: 'inline-block', width:'50%',paddingBottom:'1rem'}}>Author: Hadsaw Kakazai</span>
        <span style={{display: 'inline-block', width:'50%',paddingBottom:'1rem'}}>Email: hadsawkakazaihk@gmail.com</span>
        
=======
      <div style={{ backgroundColor: 'rgb(49, 147, 237)', color: 'white', borderRadius: '10px 10px 10px 10px', fontWeight: 'bolder', paddingLeft: '20px' }}>
        <span>Author: {post.name}</span>
        <span>Email: {post.email}</span>

>>>>>>> 95e3fb2dec69097cdfc8c3f94e18b384fe94c408
      </div>
    </div>
  )
}

export default CompletePost
