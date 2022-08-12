import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchpost.css'


class AddPost extends Component {
  constructor(props) {
    super(props)

    let obj = JSON.parse(sessionStorage.getItem(1))
    this.state = obj ? obj : {
      category: 'All',
      title: '',
      name: '',
      email: '',
      desc: ''
    }
  }

  onChangeHappen = () => {
    let obj = {
      category: document.getElementById('addCategory').value,
      title: document.getElementById('title').value,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      desc: document.getElementById('desc').value
    }

    sessionStorage.setItem(1, JSON.stringify(obj));
  }

  render() {
    return (this.props.trigger) ?
      (
        <div className="content_form">

          <Form>

            <label className='lb_category'>Select the Category </label>
            <select
              id='addCategory'
              onSelect={this.onChangeHappen}
              defaultValue={this.state.category}
              name="category" >
              <option value="All">All</option>
              <option value="Place">Place</option>
              <option value="Hotel">Hotel</option>
              <option value="Food">Food</option>

            </select>
            <br></br>
            <Form.Control id='title' type="text" defaultValue={this.state.title} onChange={this.onChangeHappen} placeholder="Enter Post Title" required={true} />
            <br></br>
            <Form.Control id='name' type="text" defaultValue={this.state.name} onChange={this.onChangeHappen} placeholder="Enter Your Name" />
            <br></br>
            <Form.Control id='email' type="text" defaultValue={this.state.email} onChange={this.onChangeHappen} placeholder="Enter Your Email" />

            <br></br>

            <textarea id='desc' style={{ width: "100%" }} defaultValue={this.state.desc} onChange={this.onChangeHappen} placeholder="Enter the post description"></textarea>
            <br></br>
            {/* <Form.Control type="file" accept="image/*" />
            <br></br> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

      ) : ""
  }
}

export default AddPost
