import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchpost.css'


function AddPost({ trigger }) {
  return (trigger) ?
    (
      <div className="content_form">

           <Form>
        
             <label className='lb_category'>Select the Category </label>
                <select name="category" >
                    <option value="places">Places</option>
                    <option value="hotels">Hotels</option>
                    <option value="foods">Food</option>
                    
                </select>
                <br></br>
          <Form.Control type="text" placeholder="Enter Post Title" required={true} />
          <br></br>
          <Form.Control type="text" placeholder="Enter Your Name" />
          <br></br>
          <Form.Control type="text" placeholder="Enter Your Email" />
        
          <br></br>
        
          <textarea style={{width:"100%"}} placeholder="Enter the post description"></textarea>
            <br></br>
          <Form.Control type="file" accept="image/*" />
          <br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    
  



    ) : ""
}

export default AddPost
