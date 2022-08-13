import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchpost.css'

import { countries, placeData } from '../data/Countries'

class AddPost extends Component {
  constructor(props) {
    super(props)

    let obj = JSON.parse(sessionStorage.getItem(1))
    this.state = obj ? obj : {
      category: 'All',
      country: '',
      city: '',
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
      country: document.getElementById('searchCountry').value,
      city: document.getElementById('searchCity').value,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      desc: document.getElementById('desc').value
    }

    sessionStorage.setItem(1, JSON.stringify(obj));
  }

  addPost = () => {
    let obj = {
      category: document.getElementById('addCategory').value,
      country: document.getElementById('searchCountry').value,
      city: document.getElementById('searchCity').value,
      title: document.getElementById('title').value,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      body: document.getElementById('desc').value
    }

    this.props.addButtonClick(obj)
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

            <label className='lb_category'>Select the Country </label>
            <select
              id='searchCountry'
              onSelect={this.onChangeHappen}
              defaultValue={this.state.country}
              name="category" >
              {
                countries.map((x, i) => <option key={i} value={x}>{x}</option>)
              }
            </select>
            <br></br>

            <label className='lb_category'>Select the City </label>
            <select
              id='searchCity'
              onSelect={this.onChangeHappen}
              defaultValue={this.state.city}
              name="category" >
              {
                placeData['Pakistan'].map((x, i) => <option key={i} value={x}>{x}</option>)
              }
              {
                placeData['India'].map((x, i) => <option key={i} value={x}>{x}</option>)
              }

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
            <Button variant="primary" type="submit" onClick={this.addPost}>
              Submit
            </Button>
          </Form>
        </div>

      ) : ""
  }
}

export default AddPost
